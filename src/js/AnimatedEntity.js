class AnimatedEntity extends Entity {
    constructor(xsize, ysize, xpos, ypos, frames, zaxis = -1) {
        super(xsize, ysize, xpos, ypos, zaxis);

        this.animation = {
            frameIndex: 0,
            tickCount: 0,
            ticksPerFrame: 4,
            numberOfFrames: frames,
        }
    }

    updateAnimation() {
        this.animation.tickCount += 1;
        if (this.animation.tickCount > this.animation.ticksPerFrame) {
            this.animation.tickCount = 0;
            // Go to the next frame
            this.animation.frameIndex += 1;
        }
        if (this.animation.frameIndex == this.animation.numberOfFrames) {
            this.animation.frameIndex = 0;
        }
    }

    getCurrentAsset() {
        return this.assets[this.current_asset][this.animation.frameIndex];
    }
}