import { ElementRef, ComponentFactoryResolver, ViewContainerRef, TemplateRef } from "@angular/core";
import { EventEmitter, OnInit, OnChanges, SimpleChanges } from "@angular/core";
import { MentionListComponent } from './mention-list.component';
/**
 * Angular 2 Mentions.
 * https://github.com/dmacfarlane/angular-mentions
 *
 * Copyright (c) 2017 Dan MacFarlane
 */
export declare class MentionDirective implements OnInit, OnChanges {
    private _element;
    private _componentResolver;
    private _viewContainerRef;
    mention: any[] | any;
    mentionConfig: any;
    mentionListTemplate: TemplateRef<any>;
    private triggerChar;
    private labelKey;
    private disableSearch;
    private maxItems;
    private mentionSelect;
    searchTerm: EventEmitter<{}>;
    onItemSelected: EventEmitter<{}>;
    searchString: string;
    startPos: number;
    items: any[];
    itemsObject: any;
    startNode: any;
    searchList: MentionListComponent;
    stopSearch: boolean;
    iframe: any;
    keyCodeSpecified: boolean;
    charPressed: string;
    constructor(_element: ElementRef, _componentResolver: ComponentFactoryResolver, _viewContainerRef: ViewContainerRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    arrayContains(arrhaystack: any, needle: any): boolean;
    setIframe(iframe: HTMLIFrameElement): void;
    stopEvent(event: any): void;
    blurHandler(event: any): void;
    keyHandler(event: any, nativeElement?: HTMLInputElement): boolean;
    updateSearchList(): void;
    showSearchList(nativeElement: HTMLInputElement): void;
}
