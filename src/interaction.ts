public container: UIContainerRect;
import resources from "../resources";

export class CustomImage {

    public container: UIContainerRect;

        constructor(gameCanvas: UICanvas, texture: Texture) {
        	this.container = new UIContainerRect(gameCanvas);
        	this.container.width = "100%"
        	this.container.height = "100%"

        	const myImage = new UIImage(this.container, texture);
        	myImage.sourceWidth = 512
        	myImage.sourceHeight = 512;
        	myImage.width = 512;
        	myImage.height = 512;
        }

    close.onClick = new OnClick((): void => {
    	this.container.visible = false
    })

}
}
