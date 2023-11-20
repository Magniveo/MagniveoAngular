import {ChangeDetectionStrategy, Component, Inject, TemplateRef} from '@angular/core';
import {TuiDialogContext, TuiDialogService} from '@taiga-ui/core';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';

@Component({
    selector: 'module-dialog',
    templateUrl: './module-dialog.template.html',
    styleUrls: ['./module-dialog.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModuleDialogComponent {
    value: number | null = null;
    name = '';
    items = [10, 50, 100];

    constructor(
        @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
        @Inject(POLYMORPHEUS_CONTEXT)
        private readonly context: TuiDialogContext<number, number>,
    ) {}

    get hasValue(): boolean {
        return this.value !== null;
    }

    get data(): number {
        return this.context.data;
    }

    submit(): void {
        if (this.value !== null) {
            this.context.completeWith(this.value);
        }
    }

    showDialog(content: TemplateRef<TuiDialogContext>): void {
        this.dialogs.open(content, {dismissible: true}).subscribe();
    }
}