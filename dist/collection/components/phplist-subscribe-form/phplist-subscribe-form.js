export class PhplistSubscribeForm {
    getForm() {
        return this.el.querySelector("form");
    }
    submit() {
        if (this.checkform()) {
            this.getForm().submit();
        }
    }
    checkform() {
        let isValid = true;
        if (!this.validateEmail()) {
            isValid = false;
        }
        return isValid;
    }
    validateEmail() {
        if (this.email === '') {
            alert("Email is required.");
            return false;
        }
        if (this.confirmEmail === '') {
            alert("Email is required.");
            return false;
        }
        if (this.email !== this.confirmEmail) {
            alert("The Email Addresses you entered do not match");
            return false;
        }
        return true;
    }
    render() {
        return (h("div", { class: "container" },
            h("form", { method: "post", name: "subscribeform", action: this.action },
                h("div", null,
                    h("input", { type: "hidden", name: "formtoken", value: this.token }),
                    h("div", { class: "form-label" }, "Email"),
                    h("div", { class: "form-body-box" },
                        h("input", { type: "text", maxlength: "40", value: this.email })),
                    h("div", { class: "form-label" }, "Confirm your email address"),
                    h("div", { class: "form-body-box" },
                        h("input", { type: "text", maxlength: "40", value: this.confirmEmail })),
                    h("div", { class: "checkbox-container" },
                        h("span", null,
                            h("input", { type: "checkbox", name: "htmlemail", value: "1", checked: true })),
                        h("span", null, "Receive emails with pictures and text (uncheck for text-only)")),
                    h("input", { type: "hidden", name: "list[3]", value: "signup" }),
                    h("input", { type: "hidden", name: "VerificationCodeX", value: "", maxlength: "20" }),
                    h("div", { class: "submit-container" },
                        h("button", { class: "submit-button", type: "submit", name: "subscribe", value: "Subscribe", onClick: () => this.checkform() }))))));
    }
}
