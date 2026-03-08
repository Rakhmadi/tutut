type Message = {
    title: String;
    text: String;
};
type Option = {
    showCloseButton?: boolean;
    showConfirm?: boolean;
    overlayClose?: boolean;
    onConfirm?: Function | undefined;
    onCancel?: Function | undefined;
    onOke?: Function | undefined;
};
declare class Tutut {
    static renderHTML(type_msg: string, message: Message, option?: Partial<Option>): void;
    static info(message: Message, option: Option): void;
    static success(message: Message, option: Option): void;
    static warning(message: Message, option: Option): void;
    static danger(message: Message, option: Option): void;
    static confirm(message: Message, option: Option): void;
    static delete(message: Message, option: Option): void;
    static question(message: Message, option: Option): void;
}
