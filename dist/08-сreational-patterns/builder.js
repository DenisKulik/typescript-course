"use strict";
var ImageFormat;
(function (ImageFormat) {
    ImageFormat["Png"] = "png";
    ImageFormat["Jpg"] = "jpg";
})(ImageFormat || (ImageFormat = {}));
class ImageBuilder {
    constructor() {
        this.formats = [];
        this.resolutions = [];
    }
    addPng() {
        if (this.formats.includes(ImageFormat.Png)) {
            return this;
        }
        this.formats.push(ImageFormat.Png);
        return this;
    }
    addJpg() {
        if (this.formats.includes(ImageFormat.Jpg)) {
            return this;
        }
        this.formats.push(ImageFormat.Jpg);
        return this;
    }
    addResolution(width, height) {
        this.resolutions.push({ width, height });
        return this;
    }
    build() {
        const res = [];
        this.formats.forEach(format => {
            this.resolutions.forEach(resolution => {
                res.push(Object.assign({ format }, resolution));
            });
        });
        return res;
    }
}
console.log(new ImageBuilder().addPng().addJpg().addResolution(100, 200).build());
