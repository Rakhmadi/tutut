type Message = {
    title: String;
    text: String;
};
type Option = {
    showCloseButton?: boolean;
    showConfirm?: boolean;
    onConfirm?: Function | undefined;
    onCancel?: Function | undefined;
};
declare class Tutut {
    static renderHTML(type_msg: string, message: Message, option?: Option): void;
    static info(): void;
}
