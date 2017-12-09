export declare class PhplistSubscribeForm {
    action: string;
    token: string;
    email: string;
    confirmEmail: string;
    form: null;
    el: HTMLElement;
    getForm(): HTMLFormElement;
    checkform(event: any): boolean;
    validateEmail(): boolean;
    render(): JSX.Element;
}
