import { Injectable, InjectionToken, Inject, Optional, Component } from '@angular/core';
import * as signalR from "@aspnet/signalr";
import { ChartModel } from './model/chartmodel';
import { HttpClient } from '@angular/common/http';
//export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

@Component({
  selector: 'app-chart-data',
  templateUrl: './signalrservice.component.html'
})
export class SignalRService {
  private http: HttpClient;
  private baseUrl: string;
  public data: ChartModel[];
  public chartOptions: any = {
    scaleShowVerticalLines: true,
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };
  public chartLabels: string[] = ['Real time data for the chart'];
  public chartType: string = 'bar';
  public chartLegend: boolean = true;
  public colors: any[] = [{ backgroundColor: '#5491DA' }, { backgroundColor: '#E74C3C' }, { backgroundColor: '#82E0AA' }, { backgroundColor: '#E5E7E9' }]

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.http = http;
    this.baseUrl = baseUrl;
  }
  ngOnInit() {
    this.startConnection();
    this.addTransferChartDataListener();
    this.startHttpRequest();
  }

  private startHttpRequest = () => {
    this.http.get(this.baseUrl+'api/Chart')
      .subscribe(res => {
        console.log(res);
      })
  }
  private hubConnection: signalR.HubConnection
    public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('/chart')
        .build();

      this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err))
  }
  public addTransferChartDataListener = () => {
    this.hubConnection.on('transferchartdata', (data) => {
      this.data = data;
      console.log(data);
    });
  }
}
