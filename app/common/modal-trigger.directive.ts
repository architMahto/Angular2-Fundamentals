import { Directive, ElementRef, Inject, Input, OnInit } from "@angular/core";
import { JQ_TOKEN } from "./jquery.service";

@Directive({
  selector: "[modal-trigger]",
})

export class ModalTriggerDirective implements OnInit {
  @Input("modal-trigger")
  public modalId: string;

  private el: HTMLElement;

  constructor(
    @Inject(JQ_TOKEN) private $: any,
    ref: ElementRef,
  ) {
    this.el = ref.nativeElement;
  }

  public ngOnInit() {
    this.el.addEventListener("click", (e) => {
      this.$(`#${this.modalId}`).modal({});
    });
  }
}
