enum ImageFormat {
 Png = 'png',
 Jpg = 'jpg',
}

interface IResolution {
 width: number
 height: number
}

interface IImageConversion extends IResolution {
    format: ImageFormat
}

class ImageBuilder {
    private formats: ImageFormat[] = []
    private resolutions: IResolution[] = []

    addPng() {
        if(this.formats.includes(ImageFormat.Png)) {
            return this
        }
        this.formats.push(ImageFormat.Png)
        return this
    }

    addJpg() {
        if(this.formats.includes(ImageFormat.Jpg)) {
            return this
        }
        this.formats.push(ImageFormat.Jpg)
        return this
    }

    addResolution(width: number, height: number) {
        this.resolutions.push({ width, height })
        return this
    }

    build(): IImageConversion[] {
        const res: IImageConversion[] = []

        this.formats.forEach(format => {
            this.resolutions.forEach(resolution => {
                res.push({ format, ...resolution })
            })
        })
        return res
    }
}

console.log(new ImageBuilder().addPng().addJpg().addResolution(100, 200).build())