import { v4 as uuidv4 } from 'uuid';
// import style_main from "./styles/Main.module.scss";

//画像
//DE10
import slideDE10_1 from "./images/slide/DE10/1.webp";
import slideDE10_2 from "./images/slide/DE10/2.webp";
import slideDE10_3 from "./images/slide/DE10/3.webp";
import slideDE10_4 from "./images/slide/DE10/4.webp";
import DE10_sp from "./images/slide/DE10/sp_1.webp";

//ドア
import slideDoor_1 from "./images/slide/Door/1.webp";
import slideDoor_2 from "./images/slide/Door/2.webp";
import slideDoor_3 from "./images/slide/Door/3.webp";
import Door_sp from "./images/slide/Door/sp_1.webp";

//背景画像
import bgDE10 from "./images/bg/DE10_4.webp";
import bgDOOR from "./images/bg/door_2.webp";


const data = [
    {
        id: uuidv4(),
        // 以下はメインページの情報
        /*class: `${style_main.DE10}`,*/
        topBackImage: bgDE10,
        href: "DE10",
        packTitle: "DE10",
        packDescription: <>
            <div>令和4年12月28日にA-TREKにて落成されました</div>
            <div>MTCとMCAに対応しています</div>
        </>,
        // 以下はダウンロードページの情報
        // pass: "A4jfHmAER5Ai",
        fileNames: ["DE10_MCA.mcaddon", "DE10_MTC.mcaddon"],
        buttonTexts: ["MCA版", "MTC版"],
        buttonDescriptions: [
            <>動作確認済バージョン<br />Minecraft 1.19.51<br />MCA 2.0.2</>,
            <>動作確認済バージョン<br />Minecraft 1.20.51<br />MTC 1.1.0</>
        ],
        slideImages: [slideDE10_1, slideDE10_2, slideDE10_3, slideDE10_4],
        sp_img: DE10_sp
    },
    {
        id: uuidv4(),
        // 以下はメインページの情報
        /*class: `${style_main.DOOR} ${style_main.ja}`,*/
        topBackImage: bgDOOR,
        href: "Door",
        packTitle: "ホームドア",
        packDescription: <>
            <div>JR東日本で使用されている<wbr />ホームドアを再現したアドオンです</div>
        </>,
        // 以下はダウンロードページの情報
        // pass: "",
        fileNames: ["platformDoor.mcaddon"],
        buttonTexts: ["4ドア"],
        buttonDescriptions: [<>動作確認済バージョン<br />Minecraft 1.20.12<br />前提アドオンなし</>],
        slideImages: [slideDoor_1, slideDoor_2, slideDoor_3],
        sp_img: Door_sp
    },
    {
        //非表示
        view: false,
        id: uuidv4(),
        // 以下はメインページの情報
        /*class: `${style_main.DOOR}`,*/
        href: "ResortLiner",
        packTitle: "DisneyResortLiner",
        packDescription: <>
            <div>ディズニーリゾートライナー<wbr />を再現したアドオンです</div>
        </>,
        // 以下はダウンロードページの情報
        // pass: "",
        fileNames: ["platformDoor.mcaddon"],
        buttonTexts: ["全色パック"],
        buttonDescriptions: [<>ここに説明</>],
        slideImages: [slideDoor_1, slideDoor_2, slideDoor_3],
        sp_img: Door_sp
    },
    {
        //非表示
        view: false,
        id: uuidv4(),
        // 以下はメインページの情報
        /*class: `${style_main.DOOR}`,*/
        href: "test",
        packTitle: "test",
        packDescription: <>
            <div>テストページ</div>
        </>,
        // 以下はダウンロードページの情報
        // pass: "",
        fileNames: [],
        buttonTexts: ["ボタンテキスト1", "ボタンテキスト2"],
        buttonDescriptions: [<>ここに説明1</>, <>ここに説明2</>],
        slideImages: [slideDoor_1, slideDoor_2, slideDoor_3],
        sp_img: Door_sp
    },
]

export default data;
