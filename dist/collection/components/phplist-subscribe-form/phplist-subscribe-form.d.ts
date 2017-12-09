export declare class PhplistSubscribeForm {
    action: string;
    token: string;
    email: string;
    confirmEmail: string;
    form: null;
    el: HTMLElement;
    getForm(): HTMLFormElement;
    submit(): void;
    checkform(): boolean;
    validateEmail(): boolean;
    render(): JSX.Element;
}
