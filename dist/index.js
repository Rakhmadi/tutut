"use strict";
class Tutut {
    static renderHTML(type_msg, message, option = {}) {
        var _a, _b, _c, _d, _e;
        let { showConfirm, onConfirm, onCancel, onOke, showCloseButton, overlayClose } = option;
        (_a = document.getElementById("modal")) === null || _a === void 0 ? void 0 : _a.remove();
        let div_icon;
        if (type_msg === "info") {
            div_icon = `
                <div class="tutut_icon_modal tutut_icon_modal_default">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM224 160a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm-8 64l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z"/></svg>
                </div>
            `;
        }
        else if (type_msg === "success") {
            div_icon = `
                <div class="tutut_icon_modal tutut_icon_modal_default">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512zM374 145.7c-10.7-7.8-25.7-5.4-33.5 5.3L221.1 315.2 169 263.1c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l72 72c5 5 11.8 7.5 18.8 7s13.4-4.1 17.5-9.8L379.3 179.2c7.8-10.7 5.4-25.7-5.3-33.5z"/></svg>
                </div>
            `;
        }
        else if (type_msg === "warning") {
            div_icon = `
                <div class="tutut_icon_modal tutut_icon_modal_warning">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0c14.7 0 28.2 8.1 35.2 21l216 400c6.7 12.4 6.4 27.4-.8 39.5S486.1 480 472 480L40 480c-14.1 0-27.2-7.4-34.4-19.5s-7.5-27.1-.8-39.5l216-400c7-12.9 20.5-21 35.2-21zm0 352a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm0-192c-18.2 0-32.7 15.5-31.4 33.7l7.4 104c.9 12.5 11.4 22.3 23.9 22.3 12.6 0 23-9.7 23.9-22.3l7.4-104c1.3-18.2-13.1-33.7-31.4-33.7z"/></svg>
                </div>
            `;
        }
        else if (type_msg === "danger") {
            div_icon = `
                <div class="tutut_icon_modal tutut_icon_modal_danger">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512zm0-192a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm0-192c-18.2 0-32.7 15.5-31.4 33.7l7.4 104c.9 12.6 11.4 22.3 23.9 22.3 12.6 0 23-9.7 23.9-22.3l7.4-104c1.3-18.2-13.1-33.7-31.4-33.7z"/></svg>
                </div>
            `;
        }
        else if (type_msg === "confirm") {
            div_icon = `
                <div class="tutut_icon_modal tutut_icon_modal_default">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM224 160a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm-8 64l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z"/></svg>
                </div>
            `;
        }
        else if (type_msg === "delete") {
            div_icon = `
                <div class="tutut_icon_modal tutut_icon_modal_danger">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512zm0-192a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm0-192c-18.2 0-32.7 15.5-31.4 33.7l7.4 104c.9 12.6 11.4 22.3 23.9 22.3 12.6 0 23-9.7 23.9-22.3l7.4-104c1.3-18.2-13.1-33.7-31.4-33.7z"/></svg>
                </div>
            `;
        }
        else if (type_msg === "question") {
            div_icon = `
                <div class="tutut_icon_modal tutut_icon_modal_question">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm0-336c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>
                </div>
            `;
        }
        else {
            throw new Error("Type Msg = info | success | warning | danger | confirm | delete");
        }
        let button_grup;
        if (showConfirm && type_msg === "delete") {
            button_grup = `
                <div class="tutut_bottom_row">
                    <button class="tutut_button tutut_button_gray" id="tutut_cancel">Cancel</button>
                    <button class="tutut_button tutut_button_danger" id="tutut_confirm">Delete</button>
                </div>
            `;
        }
        else if (showConfirm && type_msg === "danger") {
            button_grup = `
                <div class="tutut_bottom_row">
                    <button class="tutut_button tutut_button_gray" id="tutut_cancel">Cancel</button>
                    <button class="tutut_button tutut_button_danger" id="tutut_confirm">Confirm</button>
                </div>
            `;
        }
        else if (showConfirm && type_msg === "warning") {
            button_grup = `
                <div class="tutut_bottom_row">
                    <button class="tutut_button tutut_button_gray" id="tutut_cancel">Cancel</button>
                    <button class="tutut_button tutut_button_warning" id="tutut_confirm">Confirm</button>
                </div>
            `;
        }
        else if (showConfirm && type_msg === "confirm") {
            button_grup = `
                <div class="tutut_bottom_row">
                    <button class="tutut_button tutut_button_gray" id="tutut_cancel">Cancel</button>
                    <button class="tutut_button tutut_button_default" id="tutut_confirm">Confirm</button>
                </div>
            `;
        }
        else if (showConfirm) {
            button_grup = `
                <div class="tutut_bottom_row">
                    <button class="tutut_button tutut_button_default" id="tutut_ok">Oke</button>
                </div>
            `;
        }
        let html_modal = `<div class="tutut_modal" id="modal">
        <div class="tutut_inner_modal" id="inner_modal">
            <div class="tutut_top_row">
                <div class="tutut_body_modal">
                <!-- for icon -->       
                    ${div_icon}
                    <div class="tutut_inner_body_modal">
                        <span class="tutut_title_body">${(message === null || message === void 0 ? void 0 : message.title) ? message === null || message === void 0 ? void 0 : message.title : ""}</span>
                        <span class="tutut_text_gray">${(message === null || message === void 0 ? void 0 : message.text) ? message === null || message === void 0 ? void 0 : message.text : ""}</span>
                    </div>
                </div>
                <div class="tutut_cls_button" id="cls_btn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z"/></svg>
                </div>
            </div>
                <!-- for button confirn  -->       
                ${(button_grup) ? button_grup : ""}

        </div>
    </div>`;
        (_b = document.querySelector("body")) === null || _b === void 0 ? void 0 : _b.insertAdjacentHTML("beforeend", html_modal);
        let modal = document.getElementById("modal");
        let inner_modal = document.getElementById("inner_modal");
        setTimeout(() => {
            inner_modal.classList.add("tutut_active");
            modal.classList.add("tutut_active");
        }, 100);
        function removeDom() {
            inner_modal.classList.remove("tutut_active");
            modal.classList.remove("tutut_active");
        }
        let cls_btn = document.getElementById("cls_btn");
        if (!showCloseButton && showCloseButton !== undefined) {
            cls_btn.style.display = "none";
        }
        if (overlayClose === undefined || overlayClose) {
            modal.onclick = (e) => {
                if (e.target === e.currentTarget) {
                    removeDom();
                }
            };
        }
        cls_btn.onclick = () => {
            removeDom();
        };
        (_c = document.getElementById("tutut_cancel")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => {
            removeDom();
            onCancel && onCancel();
        });
        (_d = document.getElementById("tutut_confirm")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", () => {
            removeDom();
            onConfirm && onConfirm();
        });
        (_e = document.getElementById("tutut_ok")) === null || _e === void 0 ? void 0 : _e.addEventListener("click", () => {
            removeDom();
            onOke && onOke();
        });
    }
    static info(message, option) {
        Tutut.renderHTML("info", message, option);
    }
    static success(message, option) {
        Tutut.renderHTML("success", message, option);
    }
    static warning(message, option) {
        Tutut.renderHTML("warning", message, option);
    }
    static danger(message, option) {
        Tutut.renderHTML("danger", message, option);
    }
    static confirm(message, option) {
        Tutut.renderHTML("confirm", message, option);
    }
    static delete(message, option) {
        Tutut.renderHTML("delete", message, option);
    }
    static question(message, option) {
        Tutut.renderHTML("question", message, option);
    }
}
