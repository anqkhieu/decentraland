import  { MovableEntity } from "./MovableEntity"
import utils from "../node_modules/decentraland-ecs-utils/index"

export function BuildAll(clickables: number):  void {

    let hook: boolean = false;

    const scene = new Entity()
    const transform = new Transform({
      position: new Vector3(0, 0, 0),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    scene.addComponentOrReplace(transform)
    engine.addEntity(scene)

    const floorBaseDirt_01 = new Entity()
    floorBaseDirt_01.setParent(scene)
    const gltfShape = new GLTFShape('models/FloorBaseDirt_01/FloorBaseDirt_01.glb')
    floorBaseDirt_01.addComponentOrReplace(gltfShape)
    const transform_2 = new Transform({
      position: new Vector3(8, 0, 8),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    floorBaseDirt_01.addComponentOrReplace(transform_2)
    engine.addEntity(floorBaseDirt_01)

    const floorBaseDirt_01_2 = new Entity()
    floorBaseDirt_01_2.setParent(scene)
    floorBaseDirt_01_2.addComponentOrReplace(gltfShape)
    const transform_3 = new Transform({
      position: new Vector3(24, 0, 8),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    floorBaseDirt_01_2.addComponentOrReplace(transform_3)
    engine.addEntity(floorBaseDirt_01_2)

    const floorBaseDirt_01_3 = new Entity()
    floorBaseDirt_01_3.setParent(scene)
    floorBaseDirt_01_3.addComponentOrReplace(gltfShape)
    const transform_4 = new Transform({
      position: new Vector3(8, 0, 24),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    floorBaseDirt_01_3.addComponentOrReplace(transform_4)
    engine.addEntity(floorBaseDirt_01_3)

    const floorBaseDirt_01_4 = new Entity()
    floorBaseDirt_01_4.setParent(scene)
    floorBaseDirt_01_4.addComponentOrReplace(gltfShape)
    const transform_5 = new Transform({
      position: new Vector3(24, 0, 24),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    floorBaseDirt_01_4.addComponentOrReplace(transform_5)
    engine.addEntity(floorBaseDirt_01_4)

    const floorBaseDirt_01_5 = new Entity()
    floorBaseDirt_01_5.setParent(scene)
    floorBaseDirt_01_5.addComponentOrReplace(gltfShape)
    const transform_6 = new Transform({
      position: new Vector3(8, 0, 40),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    floorBaseDirt_01_5.addComponentOrReplace(transform_6)
    engine.addEntity(floorBaseDirt_01_5)

    const floorBaseDirt_01_6 = new Entity()
    floorBaseDirt_01_6.setParent(scene)
    floorBaseDirt_01_6.addComponentOrReplace(gltfShape)
    const transform_7 = new Transform({
      position: new Vector3(24, 0, 40),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    floorBaseDirt_01_6.addComponentOrReplace(transform_7)
    engine.addEntity(floorBaseDirt_01_6)

    const floorBaseDirt_01_7 = new Entity()
    floorBaseDirt_01_7.setParent(scene)
    floorBaseDirt_01_7.addComponentOrReplace(gltfShape)
    const transform_8 = new Transform({
      position: new Vector3(8, 0, 56),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    floorBaseDirt_01_7.addComponentOrReplace(transform_8)
    engine.addEntity(floorBaseDirt_01_7)

    const floorBaseDirt_01_8 = new Entity()
    floorBaseDirt_01_8.setParent(scene)
    floorBaseDirt_01_8.addComponentOrReplace(gltfShape)
    const transform_9 = new Transform({
      position: new Vector3(24, 0, 56),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    floorBaseDirt_01_8.addComponentOrReplace(transform_9)
    engine.addEntity(floorBaseDirt_01_8)

    const rockBig_06 = new Entity()
    rockBig_06.setParent(scene)
    const gltfShape_2 = new GLTFShape('models/RockBig_06/RockBig_06.glb')
    rockBig_06.addComponentOrReplace(gltfShape_2)
    const transform_10 = new Transform({
      position: new Vector3(24, 0, 7),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(0.42264973081037405, 0.42264973081037405, 0.42264973081037405)
    })
    rockBig_06.addComponentOrReplace(transform_10)
    engine.addEntity(rockBig_06)

    const rockSand_02 = new Entity()
    rockSand_02.setParent(scene)
    const gltfShape_3 = new GLTFShape('models/RockSand_02/RockSand_02.glb')
    rockSand_02.addComponentOrReplace(gltfShape_3)
    const transform_11 = new Transform({
      position: new Vector3(26, 0, 6.5),
      rotation: new Quaternion(-0.35355339059327395, -0.8535533905932743, 0.14644660940672635, 0.35355339059327395),
      scale: new Vector3(0.3020433614105761, 0.3020433614105761, 0.3020433614105761)
    })
    rockSand_02.addComponentOrReplace(transform_11)
    engine.addEntity(rockSand_02)

    const rockPillars_01 = new Entity()
    rockPillars_01.setParent(scene)
    const gltfShape_4 = new GLTFShape('models/RockPillars_01/RockPillars_01.glb')
    rockPillars_01.addComponentOrReplace(gltfShape_4)
    const transform_12 = new Transform({
      position: new Vector3(25, 0, 8.5),
      rotation: new Quaternion(0, -0.8819212643483554, 0, 0.471396736825998),
      scale: new Vector3(1, 0.5, 1)
    })
    rockPillars_01.addComponentOrReplace(transform_12)
    engine.addEntity(rockPillars_01)

    const shoreGrass_01 = new Entity()
    shoreGrass_01.setParent(scene)
    const gltfShape_5 = new GLTFShape('models/ShoreGrass_01/ShoreGrass_01.glb')
    shoreGrass_01.addComponentOrReplace(gltfShape_5)
    const transform_13 = new Transform({
      position: new Vector3(27, 0, 7.5),
      rotation: new Quaternion(0, -0.956940335732209, 0, 0.29028467725446266),
      scale: new Vector3(1, 1, 1)
    })
    shoreGrass_01.addComponentOrReplace(transform_13)
    engine.addEntity(shoreGrass_01)

    const sandPatchSmall_01 = new Entity()
    sandPatchSmall_01.setParent(scene)
    const gltfShape_6 = new GLTFShape('models/SandPatchSmall_01/SandPatchSmall_01.glb')
    sandPatchSmall_01.addComponentOrReplace(gltfShape_6)
    const transform_14 = new Transform({
      position: new Vector3(23.5, 0, 8),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    sandPatchSmall_01.addComponentOrReplace(transform_14)
    engine.addEntity(sandPatchSmall_01)

    const palmTree_02 = new Entity()
    palmTree_02.setParent(scene)
    const gltfShape_7 = new GLTFShape('models/PalmTree_02/PalmTree_02.glb')
    palmTree_02.addComponentOrReplace(gltfShape_7)
    const transform_15 = new Transform({
      position: new Vector3(20.5, 0, 30),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    palmTree_02.addComponentOrReplace(transform_15)
    engine.addEntity(palmTree_02)

    const palmTree_02_2 = new Entity()
    palmTree_02_2.setParent(scene)
    palmTree_02_2.addComponentOrReplace(gltfShape_7)
    const transform_16 = new Transform({
      position: new Vector3(24.5, 0, 34.5),
      rotation: new Quaternion(0, 0.19509032201612825, 0, 0.9807852804032304),
      scale: new Vector3(1.5773502691896257, 1.5773502691896257, 1.5773502691896257)
    })
    palmTree_02_2.addComponentOrReplace(transform_16)
    engine.addEntity(palmTree_02_2)

    const coco_01 = new Entity()
    coco_01.setParent(scene)
    const gltfShape_8 = new GLTFShape('models/Coco_01/Coco_01.glb')
    coco_01.addComponentOrReplace(gltfShape_8)
    const transform_17 = new Transform({
      position: new Vector3(24.5, 9, 35),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(3.3094010767585047, 3.3094010767585047, 3.3094010767585047)
    })
    coco_01.addComponentOrReplace(transform_17)
    coco_01.addComponent(
        new OnClick((): void => {
            clickables++
            updateTxt('Wow, it tastes good but there is too little!')
        })
    )
    engine.addEntity(coco_01)

    const coco_01_2 = new Entity()
    coco_01_2.setParent(scene)
    coco_01_2.addComponentOrReplace(gltfShape_8)
    const transform_18 = new Transform({
      position: new Vector3(25, 9.5, 34),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(3.3094010767585047, 3.3094010767585047, 3.3094010767585047)
    })
    coco_01_2.addComponentOrReplace(transform_18)
    coco_01_2.addComponent(
        new OnClick((): void => {
            clickables++
            updateTxt('Wow, it tastes good but there is too little!')
        })
    )
    engine.addEntity(coco_01_2)

    const coco_02 = new Entity()
    coco_02.setParent(scene)
    const gltfShape_9 = new GLTFShape('models/Coco_02/Coco_02.glb')
    coco_02.addComponentOrReplace(gltfShape_9)
    const transform_19 = new Transform({
      position: new Vector3(25.5, 1.5, 8.5),
      rotation: new Quaternion(1.5265566588595902e-16, 0, 0, 1.0000000000000002),
      scale: new Vector3(2.918811987867458, 2.918811987867458, 2.918811987867458)
    })
    coco_02.addComponentOrReplace(transform_19)
    engine.addEntity(coco_02)

    const rockBig_03 = new Entity()
    rockBig_03.setParent(scene)
    const gltfShape_10 = new GLTFShape('models/RockBig_03/RockBig_03.glb')
    rockBig_03.addComponentOrReplace(gltfShape_10)
    const transform_20 = new Transform({
      position: new Vector3(23, 0, 36),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(0.13397459621556118, 0.13397459621556118, 0.13397459621556118)
    })
    rockBig_03.addComponentOrReplace(transform_20)
    engine.addEntity(rockBig_03)

    const rockBig_07 = new Entity()
    rockBig_07.setParent(scene)
    const gltfShape_11 = new GLTFShape('models/RockBig_07/RockBig_07.glb')
    rockBig_07.addComponentOrReplace(gltfShape_11)
    const transform_21 = new Transform({
      position: new Vector3(25.5, 0, 37.5),
      rotation: new Quaternion(0, 0.9999999999999998, 0, 5.551115123125783e-17),
      scale: new Vector3(0.42264973081037405, 0.42264973081037405, 0.42264973081037405)
    })
    rockBig_07.addComponentOrReplace(transform_21)
    engine.addEntity(rockBig_07)

    const boat_01 = new Entity()
    boat_01.setParent(scene)
    const gltfShape_12 = new GLTFShape('models/Boat_01/Boat_01.glb')
    boat_01.addComponentOrReplace(gltfShape_12)
    const transform_22 = new Transform({
      position: new Vector3(28.5, 0, 4),
      rotation: new Quaternion(0.13794968964147147, -0.6935199226610737, -0.1379496896414715, 0.6935199226610738),
      scale: new Vector3(1, 1, 1)
    })
    boat_01.addComponent(
        new OnClick((): void => {
            clickables++
            updateTxt('Shipwreck refugee to be assumed.')
        })
    )
    boat_01.addComponentOrReplace(transform_22)
    engine.addEntity(boat_01)

    const sandPatchBig_01 = new Entity()
    sandPatchBig_01.setParent(scene)
    const gltfShape_13 = new GLTFShape('models/SandPatchBig_01/SandPatchBig_01.glb')
    sandPatchBig_01.addComponentOrReplace(gltfShape_13)
    const transform_23 = new Transform({
      position: new Vector3(28, 0, 3),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    sandPatchBig_01.addComponentOrReplace(transform_23)
    engine.addEntity(sandPatchBig_01)

    const waterPatchFull_01 = new Entity()
    waterPatchFull_01.setParent(scene)
    const gltfShape_14 = new GLTFShape('models/WaterPatchFull_01/WaterPatchFull_01.glb')
    waterPatchFull_01.addComponentOrReplace(gltfShape_14)
    const transform_24 = new Transform({
      position: new Vector3(8, 0, 8),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    waterPatchFull_01.addComponentOrReplace(transform_24)
    engine.addEntity(waterPatchFull_01)

    const waterPatchCurve_01 = new Entity()
    waterPatchCurve_01.setParent(scene)
    const gltfShape_15 = new GLTFShape('models/WaterPatchCurve_01/WaterPatchCurve_01.glb')
    waterPatchCurve_01.addComponentOrReplace(gltfShape_15)
    const transform_25 = new Transform({
      position: new Vector3(0, 0, 8),
      rotation: new Quaternion(0, 1, 0, 1.5265566588595902e-16),
      scale: new Vector3(1.2886751345948129, 1.2886751345948129, 1.2886751345948129)
    })
    waterPatchCurve_01.addComponentOrReplace(transform_25)
    engine.addEntity(waterPatchCurve_01)

    const waterPatchCurve_01_2 = new Entity()
    waterPatchCurve_01_2.setParent(scene)
    waterPatchCurve_01_2.addComponentOrReplace(gltfShape_15)
    const transform_26 = new Transform({
      position: new Vector3(8, 0, 0),
      rotation: new Quaternion(0, 1, 0, 1.5265566588595902e-16),
      scale: new Vector3(1.2886751345948129, 1.2886751345948129, 1.2886751345948129)
    })
    waterPatchCurve_01_2.addComponentOrReplace(transform_26)
    engine.addEntity(waterPatchCurve_01_2)

    const starfish_01 = new Entity()
    starfish_01.setParent(scene)
    const gltfShape_16 = new GLTFShape('models/Starfish_01/Starfish_01.glb')
    starfish_01.addComponentOrReplace(gltfShape_16)
    const transform_27 = new Transform({
      position: new Vector3(15, 0, 5.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1.5773502691896257, 1.5773502691896257, 1.5773502691896257)
    })
    starfish_01.addComponentOrReplace(transform_27)
    engine.addEntity(starfish_01)

    const starfish_01_2 = new Entity()
    starfish_01_2.setParent(scene)
    starfish_01_2.addComponentOrReplace(gltfShape_16)
    const transform_28 = new Transform({
      position: new Vector3(15, 0, 3.5),
      rotation: new Quaternion(0, 0.3826834323650897, 0, 0.9238795325112867),
      scale: new Vector3(1.2886751345948129, 1.2886751345948129, 1.2886751345948129)
    })
    starfish_01_2.addComponentOrReplace(transform_28)
    engine.addEntity(starfish_01_2)

    const spear_01 = new Entity()
    spear_01.setParent(scene)
    const gltfShape_17 = new GLTFShape('models/Spear_01/Spear_01.glb')
    spear_01.addComponentOrReplace(gltfShape_17)
    const transform_29 = new Transform({
      position: new Vector3(26.5, 0, 15),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2.611048865850578, 2.111048865850578, 2.611048865850578)
    })
    spear_01.addComponentOrReplace(transform_29)
    engine.addEntity(spear_01)

    const spear_01_2 = new Entity()
    spear_01_2.setParent(scene)
    spear_01_2.addComponentOrReplace(gltfShape_17)
    const transform_30 = new Transform({
      position: new Vector3(25.5, 0, 15),
      rotation: new Quaternion(0, 0, 0.09801714032956058, 0.995184726672197),
      scale: new Vector3(2.611048865850578, 2.611048865850578, 2.611048865850578)
    })
    spear_01_2.addComponentOrReplace(transform_30)
    engine.addEntity(spear_01_2)

    const crateLong_01 = new Entity()
    crateLong_01.setParent(scene)
    const gltfShape_18 = new GLTFShape('models/CrateLong_01/CrateLong_01.glb')
    crateLong_01.addComponentOrReplace(gltfShape_18)
    const transform_31 = new Transform({
      position: new Vector3(25.5, 0, 17),
      rotation: new Quaternion(0, 0.8314696123025451, 0, 0.5555702330196022),
      scale: new Vector3(1.2886751345948126, 1.2886751345948126, 1.2886751345948126)
    })
    crateLong_01.addComponentOrReplace(transform_31)
    engine.addEntity(crateLong_01)

    const crateLong_01_2 = new Entity()
    crateLong_01_2.setParent(scene)
    crateLong_01_2.addComponentOrReplace(gltfShape_18)
    const transform_32 = new Transform({
      position: new Vector3(27, 0, 17),
      rotation: new Quaternion(0, 0.8314696123025451, 0, 0.5555702330196022),
      scale: new Vector3(1.2886751345948126, 1.2886751345948126, 1.2886751345948126)
    })
    crateLong_01_2.addComponentOrReplace(transform_32)
    engine.addEntity(crateLong_01_2)

    const spicesbag_03 = new Entity()
    spicesbag_03.setParent(scene)
    const gltfShape_19 = new GLTFShape('models/Spicesbag_03/Spicesbag_03.glb')
    spicesbag_03.addComponentOrReplace(gltfShape_19)
    const transform_33 = new Transform({
      position: new Vector3(26, 0, 19.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1.5773502691896257, 1.5773502691896257, 1.5773502691896257)
    })
    spicesbag_03.addComponentOrReplace(transform_33)
    engine.addEntity(spicesbag_03)

    const bonesSkull_01 = new Entity()
    bonesSkull_01.setParent(scene)
    const gltfShape_20 = new GLTFShape('models/BonesSkull_01/BonesSkull_01.glb')
    bonesSkull_01.addComponentOrReplace(gltfShape_20)
    const transform_34 = new Transform({
      position: new Vector3(20, 0, 9.5),
      rotation: new Quaternion(0, -0.8314696123025456, 0, 0.5555702330196025),
      scale: new Vector3(7.639528095680699, 7.639528095680699, 7.639528095680699)
    })
    bonesSkull_01.addComponentOrReplace(transform_34)
    engine.addEntity(bonesSkull_01)

    const cup_01 = new Entity()
    cup_01.setParent(scene)
    const gltfShape_21 = new GLTFShape('models/Cup_01/Cup_01.glb')
    cup_01.addComponentOrReplace(gltfShape_21)
    const transform_35 = new Transform({
      position: new Vector3(4.5, 0, 13.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(3.598076211353317, 3.598076211353317, 3.598076211353317)
    })
    cup_01.addComponentOrReplace(transform_35)
    engine.addEntity(cup_01)

    const fish_01 = new Entity()
    fish_01.setParent(scene)
    const gltfShape_22 = new GLTFShape('models/Fish_01/Fish_01.glb')
    fish_01.addComponentOrReplace(gltfShape_22)
    const transform_36 = new Transform({
      position: new Vector3(6.5, 0, 5),
      rotation: new Quaternion(-0.5879378012096799, -0.39284747919355145, -0.39284747919355123, 0.5879378012096794),
      scale: new Vector3(6.484827557301447, 6.484827557301447, 6.484827557301447)
    })
    fish_01.addComponentOrReplace(transform_36)
    fish_01.addComponent(
        new OnClick((): void => {
            clickables++
            updateTxt('Tons of fish swimming in from the ocean.')
            const clip = new AudioClip('audio/Ocean_SFX.mp3')
            const source = new AudioSource(clip)
            fish_01.addComponent(source)
            source.playing = true
            source.playOnce()
        })
    )
    engine.addEntity(fish_01)


    const barrel_02 = new Entity()
    barrel_02.setParent(scene)
    const gltfShape_23 = new GLTFShape('models/Barrel_02/Barrel_02.glb')
    barrel_02.addComponentOrReplace(gltfShape_23)
    const transform_37 = new Transform({
      position: new Vector3(27, 0, 33.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1.8660254037844384, 1.8660254037844384, 1.8660254037844384)
    })
    barrel_02.addComponentOrReplace(transform_37)
    barrel_02.addComponent(
        new OnClick((): void => {
            clickables++
            updateTxt('Pretty heavy, but sounds hollow inside.')
        })
    )
    engine.addEntity(barrel_02)

    const palmTree_01 = new Entity()
    palmTree_01.setParent(scene)
    const gltfShape_24 = new GLTFShape('models/PalmTree_01/PalmTree_01.glb')
    palmTree_01.addComponentOrReplace(gltfShape_24)
    const transform_38 = new Transform({
      position: new Vector3(18.5, 0, 20),
      rotation: new Quaternion(0.1612735257842816, -0.7956668099479272, -0.2413628880541372, 0.5316475653085998),
      scale: new Vector3(1, 1, 1)
    })
    palmTree_01.addComponentOrReplace(transform_38)
    engine.addEntity(palmTree_01)

    const palmTree_01_2 = new Entity()
    palmTree_01_2.setParent(scene)
    palmTree_01_2.addComponentOrReplace(gltfShape_24)
    const transform_39 = new Transform({
      position: new Vector3(18.5, 0, 20.5),
      rotation: new Quaternion(0.26503719669721215, -0.9395844866446704, -0.14835331456500983, 0.15788467589076327),
      scale: new Vector3(1, 1, 1)
    })
    palmTree_01_2.addComponentOrReplace(transform_39)
    engine.addEntity(palmTree_01_2)

    const palmTree_02_3 = new Entity()
    palmTree_02_3.setParent(scene)
    palmTree_02_3.addComponentOrReplace(gltfShape_7)
    const transform_40 = new Transform({
      position: new Vector3(17.5, 0, 20),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1.5, 1)
    })
    palmTree_02_3.addComponentOrReplace(transform_40)
    engine.addEntity(palmTree_02_3)

    const junglePlant_07 = new Entity()
    junglePlant_07.setParent(scene)
    const gltfShape_25 = new GLTFShape('models/JunglePlant_07/JunglePlant_07.glb')
    junglePlant_07.addComponentOrReplace(gltfShape_25)
    const transform_41 = new Transform({
      position: new Vector3(8.5, 0, 44),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2.7320508075688776, 2.7320508075688776, 2.7320508075688776)
    })
    junglePlant_07.addComponentOrReplace(transform_41)
    engine.addEntity(junglePlant_07)

    const junglePlant_07_2 = new Entity()
    junglePlant_07_2.setParent(scene)
    junglePlant_07_2.addComponentOrReplace(gltfShape_25)
    const transform_42 = new Transform({
      position: new Vector3(11.5, 0, 44.5),
      rotation: new Quaternion(0, 0, 0.19509032201612825, 0.9807852804032304),
      scale: new Vector3(1.5773502691896262, 1.5773502691896262, 1.5773502691896262)
    })
    junglePlant_07_2.addComponentOrReplace(transform_42)
    engine.addEntity(junglePlant_07_2)

    const binoculars_01 = new Entity()
    binoculars_01.setParent(scene)
    const gltfShape_26 = new GLTFShape('models/Binoculars_01/Binoculars_01.glb')
    binoculars_01.addComponentOrReplace(gltfShape_26)
    const transform_43 = new Transform({
      position: new Vector3(26.5, 0.5, 24),
      rotation: new Quaternion(-0.08149827366882394, -0.8274658588555462, 0.05445540549280905, 0.5528950104948218),
      scale: new Vector3(2.154700538379254, 2.154700538379254, 2.154700538379254)
    })
    binoculars_01.addComponentOrReplace(transform_43)
    binoculars_01.addComponent(
        new OnClick((): void => {
            clickables++
            updateTxt('There is not much to see but the ocean.')
        })
    )
    engine.addEntity(binoculars_01)

    const sandbag_01 = new Entity()
    sandbag_01.setParent(scene)
    const gltfShape_27 = new GLTFShape('models/Sandbag_01/Sandbag_01.glb')
    sandbag_01.addComponentOrReplace(gltfShape_27)
    const transform_44 = new Transform({
      position: new Vector3(25.5, 0, 25),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(5.5, 1, 6)
    })
    sandbag_01.addComponentOrReplace(transform_44)
    engine.addEntity(sandbag_01)

    const spicesbag_03_2 = new Entity()
    spicesbag_03_2.setParent(scene)
    spicesbag_03_2.addComponentOrReplace(gltfShape_19)
    const transform_45 = new Transform({
      position: new Vector3(23.5, 0, 23.5),
      rotation: new Quaternion(0.7037018687631915, 0.0961337684624509, -0.01912219546999401, 0.7037018687631915),
      scale: new Vector3(2, 3, 1)
    })
    spicesbag_03_2.addComponentOrReplace(transform_45)
    spicesbag_03_2.addComponent(
        new OnClick((): void => {
            clickables++
            updateTxt('This empty sack was used as a pillow.')
        })
    )
    engine.addEntity(spicesbag_03_2)

    const pirateHat_02 = new Entity()
    pirateHat_02.setParent(scene)
    const gltfShape_28 = new GLTFShape('models/PirateHat_02/PirateHat_02.glb')
    pirateHat_02.addComponentOrReplace(gltfShape_28)
    const transform_46 = new Transform({
      position: new Vector3(23.5, 0, 27),
      rotation: new Quaternion(-0.12376399009235475, 0.7581572742560002, 0.15080685826836962, 0.6222035950943673),
      scale: new Vector3(2.1547005383792515, 2.1547005383792515, 2.1547005383792515)
    })
    pirateHat_02.addComponentOrReplace(transform_46)
    pirateHat_02.addComponent(
        new OnClick((): void => {
            clickables++
            updateTxt('Why take this off in the sweltering heat?')
        })
    )
    engine.addEntity(pirateHat_02)

    const spicesbag_02 = new Entity()
    spicesbag_02.setParent(scene)
    const gltfShape_29 = new GLTFShape('models/Spicesbag_02/Spicesbag_02.glb')
    spicesbag_02.addComponentOrReplace(gltfShape_29)
    const transform_47 = new Transform({
      position: new Vector3(25, 0, 20),
      rotation: new Quaternion(-6.938893903907228e-17, 0.831469612302545, 0.5555702330196021, 1.942890293094024e-16),
      scale: new Vector3(1, 1, 1)
    })
    spicesbag_02.addComponentOrReplace(transform_47)
    spicesbag_02.addComponent(
        new OnClick((): void => {
            clickables++
            updateTxt('Yikes, ghost pepper powder!')
        })
    )
    engine.addEntity(spicesbag_02)

    const bottle_02 = new Entity()
    bottle_02.setParent(scene)
    const gltfShape_30 = new GLTFShape('models/Bottle_02/Bottle_02.glb')
    bottle_02.addComponentOrReplace(gltfShape_30)
    const transform_48 = new Transform({
      position: new Vector3(27, 0, 35),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1.5773502691896257, 1.5773502691896257, 1.5773502691896257)
    })
    bottle_02.addComponentOrReplace(transform_48)
    bottle_02.addComponent(
        new OnClick((): void => {
            clickables++
            updateTxt('Yep, I could use a drink.')
        })
    )
    engine.addEntity(bottle_02)

    const bottle_02_2 = new Entity()
    bottle_02_2.setParent(scene)
    bottle_02_2.addComponentOrReplace(gltfShape_30)
    const transform_49 = new Transform({
      position: new Vector3(27.5, 0, 35),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1.5773502691896257, 1.5773502691896257, 1.5773502691896257)
    })
    bottle_02_2.addComponentOrReplace(transform_49)
    bottle_02_2.addComponent(
        new OnClick((): void => {
            clickables++
            updateTxt('Pirates love their rum, I guess.')
        })
    )
    engine.addEntity(bottle_02_2)

    const rockSand_04 = new Entity()
    rockSand_04.setParent(scene)
    const gltfShape_31 = new GLTFShape('models/RockSand_04/RockSand_04.glb')
    rockSand_04.addComponentOrReplace(gltfShape_31)
    const transform_50 = new Transform({
      position: new Vector3(9.5, 0, 53),
      rotation: new Quaternion(0, 0.9807852804032303, 0, 0.19509032201612836),
      scale: new Vector3(1.2886751345948126, 1.2886751345948126, 1.2886751345948126)
    })
    rockSand_04.addComponentOrReplace(transform_50)
    engine.addEntity(rockSand_04)

    const rockSand_03 = new Entity()
    rockSand_03.setParent(scene)
    const gltfShape_32 = new GLTFShape('models/RockSand_03/RockSand_03.glb')
    rockSand_03.addComponentOrReplace(gltfShape_32)
    const transform_51 = new Transform({
      position: new Vector3(5.5, 0, 52.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2.154700538379252, 2.154700538379252, 2.154700538379252)
    })
    rockSand_03.addComponentOrReplace(transform_51)
    engine.addEntity(rockSand_03)

    const rockSand_04_2 = new Entity()
    rockSand_04_2.setParent(scene)
    rockSand_04_2.addComponentOrReplace(gltfShape_31)
    const transform_52 = new Transform({
      position: new Vector3(6.5, 0, 57),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1.5773502691896257, 1.5773502691896257, 1.5773502691896257)
    })
    rockSand_04_2.addComponentOrReplace(transform_52)
    engine.addEntity(rockSand_04_2)

    const rockArc_01 = new Entity()
    rockArc_01.setParent(scene)
    const gltfShape_33 = new GLTFShape('models/RockArc_01/RockArc_01.glb')
    rockArc_01.addComponentOrReplace(gltfShape_33)
    const transform_53 = new Transform({
      position: new Vector3(9, 0, 51.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(-0.732050807568877, -0.732050807568877, -0.732050807568877)
    })
    rockArc_01.addComponentOrReplace(transform_53)
    engine.addEntity(rockArc_01)

    const openChestTop_01 = new MovableEntity(
        new GLTFShape('models/OpenChestTop_01/OpenChestTop_01.glb'),
        {position: new Vector3(9.5, 0, 57),
        rotation: new Quaternion(-0.26620521224660296, 0.2681880719170424, -0.11108713665472991, 0.8840975900174669),
        scale: new Vector3(2.7320508075688776, 2.7320508075688776, 2.7320508075688776)},
        new Vector3(0,0,-0.9)
        new Quaternion(-0.8,0,0,0)
    )
    //openChestTop_01.setParent(scene)
        openChestTop_01.addComponent(new OnClick((): void => {
            if(hook == false){
                updateTxt('Need something to fiddle around with the chest lid lock.')
            } else{
	            openChestTop_01.getComponent(utils.ToggleComponent).toggle();
                updateTxt('So what was most precious?')

                const bottle_11 = new Entity()
                bottle_11.setParent(scene)
                const gltfShape_35 = new GLTFShape('models/Bottle_11/Bottle_11.glb')
                bottle_11.addComponentOrReplace(gltfShape_35)
                const transform_55 = new Transform({
                  position: new Vector3(11, 0, 57.5),
                  rotation: new Quaternion(-0.3643946052475794, 0.5594849272637077, 0.5371754713421029, 0.5153985844175113),
                  scale: new Vector3(2.4433756729740645, 2.4433756729740645, 2.4433756729740645)
                })
                bottle_11.addComponentOrReplace(transform_55)
                bottle_11.addComponent(new OnClick((): void => {
                    updateTxt('A letter for his unborn son...')
                    factTxt.value = 'THANKS FOR PLAYING'
                    factTxt.fontSize = 35
                }));
                engine.addEntity(bottle_11)
            }
    }));

    const bonesSmall_01 = new Entity()
    bonesSmall_01.setParent(scene)
    const gltfShape_36 = new GLTFShape('models/BonesSmall_01/BonesSmall_01.glb')
    bonesSmall_01.addComponentOrReplace(gltfShape_36)
    const transform_56 = new Transform({
      position: new Vector3(3.5, 0, 20),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    bonesSmall_01.addComponentOrReplace(transform_56)
    engine.addEntity(bonesSmall_01)

    const bonesSmall_01_2 = new Entity()
    bonesSmall_01_2.setParent(scene)
    bonesSmall_01_2.addComponentOrReplace(gltfShape_36)
    const transform_57 = new Transform({
      position: new Vector3(4, 0, 20),
      rotation: new Quaternion(0, 0.3826834323650897, 0, 0.9238795325112867),
      scale: new Vector3(1, 1, 0.5)
    })
    bonesSmall_01_2.addComponentOrReplace(transform_57)
    engine.addEntity(bonesSmall_01_2)

    const bonesSmall_01_3 = new Entity()
    bonesSmall_01_3.setParent(scene)
    bonesSmall_01_3.addComponentOrReplace(gltfShape_36)
    const transform_58 = new Transform({
      position: new Vector3(4.5, 0, 20),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    bonesSmall_01_3.addComponentOrReplace(transform_58)
    engine.addEntity(bonesSmall_01_3)

    const bonesChest_01 = new Entity()
    bonesChest_01.setParent(scene)
    const gltfShape_37 = new GLTFShape('models/BonesChest_01/BonesChest_01.glb')
    bonesChest_01.addComponentOrReplace(gltfShape_37)
    const transform_59 = new Transform({
      position: new Vector3(4, 0, 21.5),
      rotation: new Quaternion(0, -0.47139673682599764, 0, 0.881921264348355),
      scale: new Vector3(1.5773502691896257, 1.5773502691896257, 1.5773502691896257)
    })
    bonesChest_01.addComponentOrReplace(transform_59)
    bonesChest_01.addComponent(
        new OnClick((): void => {
            clickables++
            updateTxt('Mostly, small animal remains. The placement though...')
        })
    )
    engine.addEntity(bonesChest_01)

    const bonesSmall_01_4 = new Entity()
    bonesSmall_01_4.setParent(scene)
    bonesSmall_01_4.addComponentOrReplace(gltfShape_36)
    const transform_60 = new Transform({
      position: new Vector3(3.5, 0, 23),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    bonesSmall_01_4.addComponentOrReplace(transform_60)
    engine.addEntity(bonesSmall_01_4)

    const bonesSmall_01_5 = new Entity()
    bonesSmall_01_5.setParent(scene)
    bonesSmall_01_5.addComponentOrReplace(gltfShape_36)
    const transform_61 = new Transform({
      position: new Vector3(4, 0, 23.5),
      rotation: new Quaternion(0, 0.9238795325112864, 0, 0.3826834323650896),
      scale: new Vector3(1, 1, 0.5)
    })
    bonesSmall_01_5.addComponentOrReplace(transform_61)
    engine.addEntity(bonesSmall_01_5)

    const bonesSmall_01_6 = new Entity()
    bonesSmall_01_6.setParent(scene)
    bonesSmall_01_6.addComponentOrReplace(gltfShape_36)
    const transform_62 = new Transform({
      position: new Vector3(4, 0, 23),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    bonesSmall_01_6.addComponentOrReplace(transform_62)
    engine.addEntity(bonesSmall_01_6)

    const bonesSmall_01_7 = new Entity()
    bonesSmall_01_7.setParent(scene)
    bonesSmall_01_7.addComponentOrReplace(gltfShape_36)
    const transform_63 = new Transform({
      position: new Vector3(4, 0, 22.5),
      rotation: new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477),
      scale: new Vector3(1, 1, 1.5)
    })
    bonesSmall_01_7.addComponentOrReplace(transform_63)
    engine.addEntity(bonesSmall_01_7)

    const bonesSmall_01_8 = new Entity()
    bonesSmall_01_8.setParent(scene)
    bonesSmall_01_8.addComponentOrReplace(gltfShape_36)
    const transform_64 = new Transform({
      position: new Vector3(3.5, 0, 23.5),
      rotation: new Quaternion(0, 0.3826834323650897, 0, 0.9238795325112867),
      scale: new Vector3(1, 1, 0.5)
    })
    bonesSmall_01_8.addComponentOrReplace(transform_64)
    engine.addEntity(bonesSmall_01_8)

    const bonesSmall_01_9 = new Entity()
    bonesSmall_01_9.setParent(scene)
    bonesSmall_01_9.addComponentOrReplace(gltfShape_36)
    const transform_65 = new Transform({
      position: new Vector3(4.5, 0, 23.5),
      rotation: new Quaternion(0, 0.6343932841636457, 0, 0.7730104533627372),
      scale: new Vector3(1, 1, 0.5)
    })
    bonesSmall_01_9.addComponentOrReplace(transform_65)
    engine.addEntity(bonesSmall_01_9)

    const bonesSmall_01_10 = new Entity()
    bonesSmall_01_10.setParent(scene)
    bonesSmall_01_10.addComponentOrReplace(gltfShape_36)
    const transform_66 = new Transform({
      position: new Vector3(4, 0, 24.5),
      rotation: new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477),
      scale: new Vector3(1, 1, 1.5)
    })
    bonesSmall_01_10.addComponentOrReplace(transform_66)
    engine.addEntity(bonesSmall_01_10)

    const bonesSmall_01_11 = new Entity()
    bonesSmall_01_11.setParent(scene)
    bonesSmall_01_11.addComponentOrReplace(gltfShape_36)
    const transform_67 = new Transform({
      position: new Vector3(3.5, 0, 25),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    bonesSmall_01_11.addComponentOrReplace(transform_67)
    engine.addEntity(bonesSmall_01_11)

    const bonesSmall_01_12 = new Entity()
    bonesSmall_01_12.setParent(scene)
    bonesSmall_01_12.addComponentOrReplace(gltfShape_36)
    const transform_68 = new Transform({
      position: new Vector3(3.5, 0, 25.5),
      rotation: new Quaternion(0, 0.3826834323650897, 0, 0.9238795325112867),
      scale: new Vector3(1, 1, 0.5)
    })
    bonesSmall_01_12.addComponentOrReplace(transform_68)
    engine.addEntity(bonesSmall_01_12)

    const bonesSmall_01_13 = new Entity()
    bonesSmall_01_13.setParent(scene)
    bonesSmall_01_13.addComponentOrReplace(gltfShape_36)
    const transform_69 = new Transform({
      position: new Vector3(4, 0, 25.5),
      rotation: new Quaternion(0, 0.9238795325112864, 0, 0.3826834323650896),
      scale: new Vector3(1, 1, 0.5)
    })
    bonesSmall_01_13.addComponentOrReplace(transform_69)
    engine.addEntity(bonesSmall_01_13)

    const bonesSmall_01_14 = new Entity()
    bonesSmall_01_14.setParent(scene)
    bonesSmall_01_14.addComponentOrReplace(gltfShape_36)
    const transform_70 = new Transform({
      position: new Vector3(4, 0, 25),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    bonesSmall_01_14.addComponentOrReplace(transform_70)
    engine.addEntity(bonesSmall_01_14)

    const bonesSmall_01_15 = new Entity()
    bonesSmall_01_15.setParent(scene)
    bonesSmall_01_15.addComponentOrReplace(gltfShape_36)
    const transform_71 = new Transform({
      position: new Vector3(4.5, 0, 25.5),
      rotation: new Quaternion(0, 0.6343932841636457, 0, 0.7730104533627372),
      scale: new Vector3(1, 1, 0.5)
    })
    bonesSmall_01_15.addComponentOrReplace(transform_71)
    engine.addEntity(bonesSmall_01_15)

    const bonesSmall_01_16 = new Entity()
    bonesSmall_01_16.setParent(scene)
    bonesSmall_01_16.addComponentOrReplace(gltfShape_36)
    const transform_72 = new Transform({
      position: new Vector3(3.5, 0, 26.5),
      rotation: new Quaternion(0, 0.4713967368259977, 0, 0.8819212643483549),
      scale: new Vector3(1, 1, 1)
    })
    bonesSmall_01_16.addComponentOrReplace(transform_72)
    engine.addEntity(bonesSmall_01_16)

    const bonesBig_01 = new Entity()
    bonesBig_01.setParent(scene)
    const gltfShape_38 = new GLTFShape('models/BonesBig_01/BonesBig_01.glb')
    bonesBig_01.addComponentOrReplace(gltfShape_38)
    const transform_73 = new Transform({
      position: new Vector3(4, 0, 26.5),
      rotation: new Quaternion(0, -0.38268343236508984, 0, 0.9238795325112868),
      scale: new Vector3(1, 1, 2)
    })
    bonesBig_01.addComponentOrReplace(transform_73)
    engine.addEntity(bonesBig_01)

    const map_04 = new Entity()
    map_04.setParent(scene)
    const gltfShape_39 = new GLTFShape('models/Map_04/Map_04.glb')
    map_04.addComponentOrReplace(gltfShape_39)
    const transform_74 = new Transform({
      position: new Vector3(21, 4, 29.5),
      rotation: new Quaternion(-0.6343932841636452, 0, 0, 0.7730104533627372),
      scale: new Vector3(1.0598788677147455, 1.0598788677147455, 1.3958470063131765)
    })
    map_04.addComponentOrReplace(transform_74)
    map_04.addComponent(
        new OnClick((): void => {
            clickables++
            updateTxt('Huh? Did he seriously leave a map to his treasure?')
        })
    )
    engine.addEntity(map_04)

    const shoreGrass_01_2 = new Entity()
    shoreGrass_01_2.setParent(scene)
    shoreGrass_01_2.addComponentOrReplace(gltfShape_5)
    const transform_75 = new Transform({
      position: new Vector3(5, 0, 45),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    shoreGrass_01_2.addComponentOrReplace(transform_75)
    engine.addEntity(shoreGrass_01_2)

    const shoreGrass_01_3 = new Entity()
    shoreGrass_01_3.setParent(scene)
    shoreGrass_01_3.addComponentOrReplace(gltfShape_5)
    const transform_76 = new Transform({
      position: new Vector3(3.5, 0, 42.5),
      rotation: new Quaternion(0, 0.3826834323650897, 0, 0.9238795325112867),
      scale: new Vector3(1, 1, 1)
    })
    shoreGrass_01_3.addComponentOrReplace(transform_76)
    engine.addEntity(shoreGrass_01_3)

    const shoreGrass_01_4 = new Entity()
    shoreGrass_01_4.setParent(scene)
    shoreGrass_01_4.addComponentOrReplace(gltfShape_5)
    const transform_77 = new Transform({
      position: new Vector3(5, 0, 44.5),
      rotation: new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475),
      scale: new Vector3(1, 1, 1)
    })
    shoreGrass_01_4.addComponentOrReplace(transform_77)
    engine.addEntity(shoreGrass_01_4)

    const rockBig_03_2 = new Entity()
    rockBig_03_2.setParent(scene)
    rockBig_03_2.addComponentOrReplace(gltfShape_10)
    const transform_78 = new Transform({
      position: new Vector3(3, 0.5, 17),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(0.7113248654051869, 4.711324865405187, -0.2886751345948131)
    })
    rockBig_03_2.addComponentOrReplace(transform_78)
    engine.addEntity(rockBig_03_2)

    const rockBig_06_2 = new Entity()
    rockBig_06_2.setParent(scene)
    rockBig_06_2.addComponentOrReplace(gltfShape_2)
    const transform_79 = new Transform({
      position: new Vector3(6, 0, 18),
      rotation: new Quaternion(0, 0.38268343236508995, 0, 0.9238795325112867),
      scale: new Vector3(0.5, 8.5, 1)
    })
    rockBig_06_2.addComponentOrReplace(transform_79)
    engine.addEntity(rockBig_06_2)

    const rockBig_06_3 = new Entity()
    rockBig_06_3.setParent(scene)
    rockBig_06_3.addComponentOrReplace(gltfShape_2)
    const transform_80 = new Transform({
      position: new Vector3(8.5, 0, 25.5),
      rotation: new Quaternion(0, -0.09801714032956062, 0, 0.9951847266721972),
      scale: new Vector3(0.5, 7.5, 1)
    })
    rockBig_06_3.addComponentOrReplace(transform_80)
    engine.addEntity(rockBig_06_3)

    const rockBig_04 = new Entity()
    rockBig_04.setParent(scene)
    const gltfShape_40 = new GLTFShape('models/RockBig_04/RockBig_04.glb')
    rockBig_04.addComponentOrReplace(gltfShape_40)
    const transform_81 = new Transform({
      position: new Vector3(7, 0, 28.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 3.5, 1)
    })
    rockBig_04.addComponentOrReplace(transform_81)
    engine.addEntity(rockBig_04)

    const rockBig_06_4 = new Entity()
    rockBig_06_4.setParent(scene)
    rockBig_06_4.addComponentOrReplace(gltfShape_2)
    const transform_82 = new Transform({
      position: new Vector3(2.5, 0, 31),
      rotation: new Quaternion(0, -0.6343932841636457, 0, 0.7730104533627371),
      scale: new Vector3(0.5, 7.5, 1)
    })
    rockBig_06_4.addComponentOrReplace(transform_82)
    engine.addEntity(rockBig_06_4)

    const rockBig_04_2 = new Entity()
    rockBig_04_2.setParent(scene)
    rockBig_04_2.addComponentOrReplace(gltfShape_40)
    const transform_83 = new Transform({
      position: new Vector3(9, 7, 21),
      rotation: new Quaternion(0, 0.5555702330196022, 0, 0.8314696123025452),
      scale: new Vector3(1, 3.5, 1.5)
    })
    rockBig_04_2.addComponentOrReplace(transform_83)
    engine.addEntity(rockBig_04_2)

    const sandbag_01_2 = new Entity()
    sandbag_01_2.setParent(scene)
    sandbag_01_2.addComponentOrReplace(gltfShape_27)
    const transform_84 = new Transform({
      position: new Vector3(8, 4.5, 20),
      rotation: new Quaternion(0.6935199226610739, -0.693519922661074, -0.1379496896414716, 0.13794968964147167),
      scale: new Vector3(5.802636649528401, 1.0550248453688, 4.666527408712848)
    })
    sandbag_01_2.addComponentOrReplace(transform_84)
    sandbag_01_2.addComponent(
        new OnClick((): void => {
            clickables++
            updateTxt('Aside, cloth!')
            engine.removeEntity(sandbag_01_2)
        })
    )
    engine.addEntity(sandbag_01_2)

    const treasureCoins_01 = new Entity()
    treasureCoins_01.setParent(scene)
    const gltfShape_41 = new GLTFShape('models/TreasureCoins_01/TreasureCoins_01.glb')
    treasureCoins_01.addComponentOrReplace(gltfShape_41)
    const transform_85 = new Transform({
      position: new Vector3(1.5, 0, 20),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2.1547005383792515, 2.1547005383792515, 2.1547005383792515)
    })
    treasureCoins_01.addComponentOrReplace(transform_85)
    treasureCoins_01.addComponent(
        new OnClick((): void => {
            clickables++
            updateTxt('Bwahaha!')
            engine.removeEntity(treasureCoins_01)
        })
    )
    engine.addEntity(treasureCoins_01)

    const treasureCoins_01_2 = new Entity()
    treasureCoins_01_2.setParent(scene)
    treasureCoins_01_2.addComponentOrReplace(gltfShape_41)
    const transform_86 = new Transform({
      position: new Vector3(1.5, 0, 19.5),
      rotation: new Quaternion(0, -0.5555702330196024, 0, 0.8314696123025453),
      scale: new Vector3(2.1547005383792515, 2.1547005383792515, 2.1547005383792515)
    })
    treasureCoins_01_2.addComponentOrReplace(transform_86)
    treasureCoins_01_2.addComponent(
        new OnClick((): void => {
            clickables++
            updateTxt('If you find the rest, you will surely be richer than Midas!')
            engine.removeEntity(treasureCoins_01_2)
        })
    )
    engine.addEntity(treasureCoins_01_2)

    const goldBar_01 = new Entity()
    goldBar_01.setParent(scene)
    const gltfShape_42 = new GLTFShape('models/GoldBar_01/GoldBar_01.glb')
    goldBar_01.addComponentOrReplace(gltfShape_42)
    const transform_87 = new Transform({
      position: new Vector3(1, 0, 19.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2.4433756729740645, 2.4433756729740645, 2.4433756729740645)
    })
    goldBar_01.addComponentOrReplace(transform_87)
    goldBar_01.addComponent(
        new OnClick((): void => {
            clickables++
            updateTxt('I mean I guess you can take it...')
            engine.removeEntity(goldBar_01)
        })
    )
    engine.addEntity(goldBar_01)

    const goldBar_01_2 = new Entity()
    goldBar_01_2.setParent(scene)
    goldBar_01_2.addComponentOrReplace(gltfShape_42)
    const transform_88 = new Transform({
      position: new Vector3(1, 0, 20.5),
      rotation: new Quaternion(0, 0.3826834323650897, 0, 0.9238795325112867),
      scale: new Vector3(2.4433756729740645, 2.4433756729740645, 2.9433756729740645)
    })
    goldBar_01_2.addComponentOrReplace(transform_88)
    goldBar_01_2.addComponent(
        new OnClick((): void => {
            clickables++
            updateTxt('He is probably long gone anyway, right?')
            engine.removeEntity(goldBar_01_2)
        })
    )
    engine.addEntity(goldBar_01_2)

    const gem_08 = new Entity()
    gem_08.setParent(scene)
    const gltfShape_43 = new GLTFShape('models/Gem_08/Gem_08.glb')
    gem_08.addComponentOrReplace(gltfShape_43)
    const transform_89 = new Transform({
      position: new Vector3(1.5, 0, 20.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    gem_08.addComponentOrReplace(transform_89)
    gem_08.addComponent(
        new OnClick((): void => {
            clickables++
            updateTxt('No good from just leaving it here so...')
            engine.removeEntity(gem_08)
        })
    )
    engine.addEntity(gem_08)

    const gem_10 = new Entity()
    gem_10.setParent(scene)
    const gltfShape_44 = new GLTFShape('models/Gem_10/Gem_10.glb')
    gem_10.addComponentOrReplace(gltfShape_44)
    const transform_90 = new Transform({
      position: new Vector3(2, 0, 21),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    gem_10.addComponentOrReplace(transform_90)
    gem_10.addComponent(
        new OnClick((): void => {
            clickables++
            updateTxt('Pretty! Riches galore!')
            engine.removeEntity(gem_10)
        })
    )
    engine.addEntity(gem_10)

    const gem_07 = new Entity()
    gem_07.setParent(scene)
    const gltfShape_45 = new GLTFShape('models/Gem_07/Gem_07.glb')
    gem_07.addComponentOrReplace(gltfShape_45)
    const transform_91 = new Transform({
      position: new Vector3(1, 0, 21),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    gem_07.addComponentOrReplace(transform_91)
    gem_07.addComponent(
        new OnClick((): void => {
            clickables++
            updateTxt('Today is your lucky day!')
            engine.removeEntity(gem_07)
        })
    )
    engine.addEntity(gem_07)

    const hook_01 = new Entity()
    hook_01.setParent(scene)
    const gltfShape_46 = new GLTFShape('models/Hook_01/Hook_01.glb')
    hook_01.addComponentOrReplace(gltfShape_46)
    const transform_92 = new Transform({
      position: new Vector3(1.5, 0, 21.5),
      rotation: new Quaternion(0, 0.5555702330196022, 0, 0.8314696123025452),
      scale: new Vector3(1, 2, 1)
    })
    hook_01.addComponentOrReplace(transform_92)
    hook_01.addComponent(
        new OnClick((): void => {
            clickables++
            updateTxt('Maybe this hook could be useful later...')
            hook = true
            engine.removeEntity(hook_01)
        })
    )
    engine.addEntity(hook_01)

    const flag_01 = new Entity()
    flag_01.setParent(scene)
    const gltfShape_47 = new GLTFShape('models/Flag_01/Flag_01.glb')
    flag_01.addComponentOrReplace(gltfShape_47)
    const transform_93 = new Transform({
      position: new Vector3(0.5, 0, 21.5),
      rotation: new Quaternion(0, 0.8314696123025452, 0, 0.5555702330196023),
      scale: new Vector3(1, 1, 1)
    })
    flag_01.addComponentOrReplace(transform_93)
    flag_01.addComponent(
        new OnClick((): void => {
            clickables++
            updateTxt('So, a pirate huh?')
        })
    )
    engine.addEntity(flag_01)

    const rockBig_06_5 = new Entity()
    rockBig_06_5.setParent(scene)
    rockBig_06_5.addComponentOrReplace(gltfShape_2)
    const transform_94 = new Transform({
      position: new Vector3(5.5, 0, 35),
      rotation: new Quaternion(0, 0.19509032201612825, 0, 0.9807852804032304),
      scale: new Vector3(0.5, 7.5, 1)
    })
    rockBig_06_5.addComponentOrReplace(transform_94)
    engine.addEntity(rockBig_06_5)

    const rockBig_06_6 = new Entity()
    rockBig_06_6.setParent(scene)
    rockBig_06_6.addComponentOrReplace(gltfShape_2)
    const transform_95 = new Transform({
      position: new Vector3(5.5, 0, 38.5),
      rotation: new Quaternion(0, -0.09801714032956063, 0, 0.9951847266721969),
      scale: new Vector3(0.5, 7.5, 1)
    })
    rockBig_06_6.addComponentOrReplace(transform_95)
    engine.addEntity(rockBig_06_6)

    const rockBig_04_3 = new Entity()
    rockBig_04_3.setParent(scene)
    rockBig_04_3.addComponentOrReplace(gltfShape_40)
    const transform_96 = new Transform({
      position: new Vector3(3.5, 0, 41),
      rotation: new Quaternion(0, -0.19509032201612833, 0, 0.9807852804032305),
      scale: new Vector3(1, 3.5, 1)
    })
    rockBig_04_3.addComponentOrReplace(transform_96)
    engine.addEntity(rockBig_04_3)

    const fishSkeleton_01 = new Entity()
    fishSkeleton_01.setParent(scene)
    const gltfShape_48 = new GLTFShape('models/FishSkeleton_01/FishSkeleton_01.glb')
    fishSkeleton_01.addComponentOrReplace(gltfShape_48)
    const transform_97 = new Transform({
      position: new Vector3(5.5, 0, 12.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2.4433756729740645, 2.4433756729740645, 2.4433756729740645)
    })
    fishSkeleton_01.addComponentOrReplace(transform_97)
    engine.addEntity(fishSkeleton_01)

    const sandPatchBig_01_2 = new Entity()
    sandPatchBig_01_2.setParent(scene)
    sandPatchBig_01_2.addComponentOrReplace(gltfShape_13)
    const transform_98 = new Transform({
      position: new Vector3(26.5, 0, 58.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2.732050807568879, 2.732050807568879, 2.732050807568879)
    })
    sandPatchBig_01_2.addComponentOrReplace(transform_98)
    engine.addEntity(sandPatchBig_01_2)

    const sandPatchMedium_01 = new Entity()
    sandPatchMedium_01.setParent(scene)
    const gltfShape_49 = new GLTFShape('models/SandPatchMedium_01/SandPatchMedium_01.glb')
    sandPatchMedium_01.addComponentOrReplace(gltfShape_49)
    const transform_99 = new Transform({
      position: new Vector3(23.5, 0, 54.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1.8660254037844386, 1.8660254037844386, 1.8660254037844386)
    })
    sandPatchMedium_01.addComponentOrReplace(transform_99)
    engine.addEntity(sandPatchMedium_01)

    const rockArc_02 = new Entity()
    rockArc_02.setParent(scene)
    const gltfShape_50 = new GLTFShape('models/RockArc_02/RockArc_02.glb')
    rockArc_02.addComponentOrReplace(gltfShape_50)
    const transform_100 = new Transform({
      position: new Vector3(16, 0, 52.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2.1547005383792515, 2.1547005383792515, 2.1547005383792515)
    })
    rockArc_02.addComponentOrReplace(transform_100)
    engine.addEntity(rockArc_02)


    // create canvas
    const m_canvas = new UICanvas()
    // create container inside canvas
    const rect = new UIContainerRect(m_canvas)
    rect.hAlign = 'center'
    rect.vAlign = 'top'
    rect.opacity = 0.9
    rect.color =  Color4.Black()
    rect.width = 450
    rect.adaptWidth = true
    rect.adaptHeight = true

    const factTxt = new UIText(rect)
    factTxt.value = 'A LOST TREASURE'
    factTxt.fontSize = 40
    factTxt.color = new Color4(0.7, 1, 0.8, 1)
    factTxt.textWrapping = true
    factTxt.fontWeight = 'bold'
    factTxt.hAlign = 'center'
    factTxt.vAlign = 'center'
    factTxt.width = 400
    factTxt.opacity = 1
    factTxt.outlineWidth = 0.2
    factTxt.outlineColor = new Color4(0, 0, 0, 1)

    const tempTxt = new UIText(rect)
    tempTxt.value = 'click to interact; solve the puzzle'
    tempTxt.fontSize = 20
    tempTxt.height = 100
    tempTxt.color = Color4.Black()
    tempTxt.textWrapping = true
    tempTxt.fontWeight = 'bold'
    tempTxt.width = 550
    tempTxt.positionX = 60
    tempTxt.positionY = -40
    tempTxt.opacity = 1

    function updateTxt(sentence: string): void {
        tempTxt.value = sentence
        if (sentence == '') {
            tempTxt.value = ''
            tempTxt.opacity = 1
        }
    }
}
