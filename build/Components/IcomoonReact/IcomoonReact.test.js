"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var enzyme_1 = __importDefault(require("enzyme"));
var enzyme_adapter_react_16_1 = __importDefault(require("enzyme-adapter-react-16"));
var IcomoonReact_1 = __importStar(require("./IcomoonReact"));
enzyme_1.default.configure({ adapter: new enzyme_adapter_react_16_1.default() });
describe("IcomoonReact component", function () {
    it("should be defined", function () {
        expect(IcomoonReact_1.default).toBeDefined();
    });
});
describe("iconList function", function () {
    var iconSet = {
        IcoMoonType: "selection",
        icons: [
            {
                icon: {
                    paths: [
                        "M950.857 859.429v-438.857c-12 13.714-25.143 26.286-39.429 37.714-81.714 62.857-164 126.857-243.429 193.143-42.857 36-96 80-155.429 80h-1.143c-59.429 0-112.571-44-155.429-80-79.429-66.286-161.714-130.286-243.429-193.143-14.286-11.429-27.429-24-39.429-37.714v438.857c0 9.714 8.571 18.286 18.286 18.286h841.143c9.714 0 18.286-8.571 18.286-18.286zM950.857 258.857c0-14.286 3.429-39.429-18.286-39.429h-841.143c-9.714 0-18.286 8.571-18.286 18.286 0 65.143 32.571 121.714 84 162.286 76.571 60 153.143 120.571 229.143 181.143 30.286 24.571 85.143 77.143 125.143 77.143h1.143c40 0 94.857-52.571 125.143-77.143 76-60.571 152.571-121.143 229.143-181.143 37.143-29.143 84-92.571 84-141.143zM1024 237.714v621.714c0 50.286-41.143 91.429-91.429 91.429h-841.143c-50.286 0-91.429-41.143-91.429-91.429v-621.714c0-50.286 41.143-91.429 91.429-91.429h841.143c50.286 0 91.429 41.143 91.429 91.429z"
                    ],
                    width: 1024,
                    attrs: [],
                    isMulticolor: false,
                    isMulticolor2: false,
                    tags: ["envelope-o"],
                    defaultCode: 61443,
                    grid: 14
                },
                attrs: [],
                properties: {
                    name: "envelope-o",
                    id: 7,
                    order: 16,
                    prevSize: 28,
                    code: 61443
                },
                setIdx: 0,
                setId: 0,
                iconIdx: 7
            },
            {
                icon: {
                    paths: [
                        "M338.857 512c-59.429 1.714-113.143 27.429-151.429 73.143h-76.571c-57.143 0-110.857-27.429-110.857-90.857 0-46.286-1.714-201.714 70.857-201.714 12 0 71.429 48.571 148.571 48.571 26.286 0 51.429-4.571 76-13.143-1.714 12.571-2.857 25.143-2.857 37.714 0 52 16.571 103.429 46.286 146.286zM950.857 876c0 92.571-61.143 148-152.571 148h-499.429c-91.429 0-152.571-55.429-152.571-148 0-129.143 30.286-327.429 197.714-327.429 19.429 0 90.286 79.429 204.571 79.429s185.143-79.429 204.571-79.429c167.429 0 197.714 198.286 197.714 327.429zM365.714 146.286c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286 65.714-146.286 146.286-146.286 146.286 65.714 146.286 146.286zM768 365.714c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429zM1097.143 494.286c0 63.429-53.714 90.857-110.857 90.857h-76.571c-38.286-45.714-92-71.429-151.429-73.143 29.714-42.857 46.286-94.286 46.286-146.286 0-12.571-1.143-25.143-2.857-37.714 24.571 8.571 49.714 13.143 76 13.143 77.143 0 136.571-48.571 148.571-48.571 72.571 0 70.857 155.429 70.857 201.714zM1024 146.286c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286 65.714-146.286 146.286-146.286 146.286 65.714 146.286 146.286z"
                    ],
                    width: 1097.142857142857,
                    attrs: [],
                    isMulticolor: false,
                    isMulticolor2: false,
                    tags: ["group", "users"],
                    defaultCode: 61632,
                    grid: 14
                },
                attrs: [],
                properties: {
                    name: "group, users",
                    id: 169,
                    order: 14,
                    prevSize: 28,
                    code: 61632
                },
                setIdx: 0,
                setId: 0,
                iconIdx: 169
            },
            {
                icon: {
                    paths: [
                        "M1024 676.571v109.714c0 9.714-8.571 18.286-18.286 18.286h-786.286v109.714c0 9.714-8 18.286-18.286 18.286-5.143 0-9.714-2.286-13.714-5.714l-182.286-182.857c-3.429-3.429-5.143-8-5.143-12.571 0-5.143 1.714-9.714 5.143-13.143l182.857-182.857c3.429-3.429 8.571-5.143 13.143-5.143 9.714 0 18.286 8 18.286 18.286v109.714h786.286c9.714 0 18.286 8 18.286 18.286zM1024 365.714c0 4.571-1.714 9.714-5.143 13.143l-182.857 182.857c-3.429 3.429-8.571 5.143-13.143 5.143-9.714 0-18.286-8.571-18.286-18.286v-109.714h-786.286c-9.714 0-18.286-8.571-18.286-18.286v-109.714c0-9.714 8.571-18.286 18.286-18.286h786.286v-109.714c0-10.286 8-18.286 18.286-18.286 5.143 0 9.714 2.286 13.714 5.714l182.286 182.286c3.429 3.429 5.143 8.571 5.143 13.143z"
                    ],
                    width: 1024,
                    attrs: [],
                    isMulticolor: false,
                    isMulticolor2: false,
                    tags: ["exchange"],
                    defaultCode: 61676,
                    grid: 14
                },
                attrs: [],
                properties: {
                    name: "exchange",
                    id: 211,
                    order: 10,
                    prevSize: 28,
                    code: 61676
                },
                setIdx: 0,
                setId: 0,
                iconIdx: 211
            },
            {
                icon: {
                    paths: [
                        "M265.143 804.571c0-25.143-20.571-45.714-45.714-45.714s-45.714 20.571-45.714 45.714 20.571 45.714 45.714 45.714 45.714-20.571 45.714-45.714zM384 713.143v-402.286c0-9.714-8.571-18.286-18.286-18.286h-292.571c-9.714 0-18.286 8.571-18.286 18.286v402.286c0 9.714 8.571 18.286 18.286 18.286h292.571c9.714 0 18.286-8.571 18.286-18.286zM274.286 228.571c0-5.143-4-9.143-9.143-9.143h-91.429c-5.143 0-9.143 4-9.143 9.143s4 9.143 9.143 9.143h91.429c5.143 0 9.143-4 9.143-9.143zM438.857 219.429v585.143c0 40-33.143 73.143-73.143 73.143h-292.571c-40 0-73.143-33.143-73.143-73.143v-585.143c0-40 33.143-73.143 73.143-73.143h292.571c40 0 73.143 33.143 73.143 73.143z"
                    ],
                    width: 438.85714285714283,
                    attrs: [],
                    isMulticolor: false,
                    isMulticolor2: false,
                    tags: ["mobile", "mobile-phone"],
                    defaultCode: 61707,
                    grid: 14
                },
                attrs: [],
                properties: {
                    name: "mobile, mobile-phone",
                    id: 240,
                    order: 12,
                    prevSize: 28,
                    code: 61707
                },
                setIdx: 0,
                setId: 0,
                iconIdx: 240
            },
            {
                icon: {
                    paths: [
                        "M648 614.286c-28.571 92-112.571 153.714-209.143 153.714s-180.571-61.714-209.143-153.714c-6.286-19.429 4.571-39.429 24-45.714 18.857-6.286 39.429 4.571 45.714 24 18.857 61.143 75.429 102.286 139.429 102.286s120.571-41.143 139.429-102.286c6.286-19.429 26.857-30.286 46.286-24 18.857 6.286 29.714 26.286 23.429 45.714zM365.714 365.714c0 40.571-32.571 73.143-73.143 73.143s-73.143-32.571-73.143-73.143 32.571-73.143 73.143-73.143 73.143 32.571 73.143 73.143zM658.286 365.714c0 40.571-32.571 73.143-73.143 73.143s-73.143-32.571-73.143-73.143 32.571-73.143 73.143-73.143 73.143 32.571 73.143 73.143zM804.571 512c0-201.714-164-365.714-365.714-365.714s-365.714 164-365.714 365.714 164 365.714 365.714 365.714 365.714-164 365.714-365.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"
                    ],
                    width: 877.7142857142857,
                    attrs: [],
                    isMulticolor: false,
                    isMulticolor2: false,
                    tags: ["smile-o"],
                    defaultCode: 61720,
                    grid: 14
                },
                attrs: [],
                properties: {
                    name: "smile-o",
                    id: 250,
                    order: 3,
                    prevSize: 28,
                    code: 61720
                },
                setIdx: 0,
                setId: 0,
                iconIdx: 250
            }
        ],
        height: 1024
    };
    it("should be defined", function () {
        expect(IcomoonReact_1.iconList(iconSet)).toBeDefined();
    });
    var expected = ["envelope-o", "group", "exchange", "mobile", "smile-o"];
    it("should return array of icons", function () {
        expect(IcomoonReact_1.iconList(iconSet)).toEqual(expect.arrayContaining(expected));
    });
});
//# sourceMappingURL=IcomoonReact.test.js.map