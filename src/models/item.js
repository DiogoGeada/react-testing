export default class Item {

    constructor(text) {

        this.text = "";

        let SetText = (text) => {

            if (typeof text == ("string" || "number" || "bigint")) {
                if (!text || !text.trim()) {
                    throw new TypeError("Item text cannot be empty");
                } else if (text.length > 64) {
                    throw new TypeError("Text is too long. It cannot pass 64 characters in length");
                }
            } else {
                throw new TypeError("Item text must be a string or a number");
            }

            this.text = text;

        }

        SetText(text);

    }
}