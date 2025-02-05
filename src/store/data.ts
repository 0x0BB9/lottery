import type { IPersonConfig, IPrizeConfig } from '@/types/storeType'

export const defaultPersonList = <IPersonConfig[]>
[
  {
    "uid": "U100156001",
    "name": "艾荣斌",
    "department": "产品部",
    "identity": "产品经理",
    "avatar": "https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
    "x": 1,
    "y": 1,
    "id": 0,
    "isWin": false,
    "createTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)",
    "updateTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)",
    "prizeName": [],
    "prizeTime": [],
    "prizeId": [],
    "country": "中国"
  },
  {
    "uid": "U100156002",
    "name": "邵凯莉",
    "department": "技术部",
    "identity": "前端开发工程师",
    "avatar": "https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
    "x": 2,
    "y": 1,
    "id": 1,
    "isWin": false,
    "createTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)",
    "updateTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)",
    "prizeName": [],
    "prizeTime": [],
    "prizeId": [],
    "country": "中国"
  },
  {
    "uid": "U100156003",
    "name": "代一凡",
    "department": "技术部",
    "identity": "后端开发工程师",
    "avatar": "https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
    "x": 3,
    "y": 1,
    "id": 2,
    "isWin": false,
    "createTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)",
    "updateTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)",
    "prizeName": [],
    "prizeTime": [],
    "prizeId": [],
    "country": "中国"
  },
  {
    "uid": "U100156004",
    "name": "李明",
    "department": "设计部",
    "identity": "UI/UX设计师",
    "avatar": "https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
    "x": 4,
    "y": 1,
    "id": 3,
    "isWin": false,
    "createTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)",
    "updateTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)",
    "prizeName": [],
    "prizeTime": [],
    "prizeId": [],
    "country": "中国"
  }]
             
export const defaultMusicList = [
  {
    id: `Geoff Knorr - China (The Industrial Era).ogg${new Date().getTime().toString()}`,
    name: 'Geoff Knorr - China (The Industrial Era).ogg',
    url: 'https://1kw20.fun/resource/audio/Geoff Knorr - China (The Industrial Era).ogg',
  },
  {
    id: `Geoff Knorr&Phill Boucher - China (The Atomic Era).ogg${new Date().getTime().toString()}`,
    name: 'Geoff Knorr&Phill Boucher - China (The Atomic Era).ogg',
    url: 'https://1kw20.fun/resource/audio/Geoff Knorr&Phill Boucher - China (The Atomic Era).ogg',
  },
  {
    id: `Radetzky March.mp3${new Date().getTime().toString()}`,
    name: 'Radetzky March.mp3',
    url: 'https://1kw20.fun/resource/audio/Radetzky March.mp3',
  },
  {
    id: `Shanghai.mp3${new Date().getTime().toString()}`,
    name: 'Shanghai.mp3',
    url: 'https://1kw20.fun/resource/audio/Shanghai.mp3',
  },
  {
    id: `Waltz No.2.mp3${new Date().getTime().toString()}`,
    name: 'Waltz No.2.mp3',
    url: 'https://1kw20.fun/resource/audio/Waltz No.2.mp3',
  },
  {
    id: `WildChinaTheme.mp3${new Date().getTime().toString()}`,
    name: 'WildChinaTheme.mp3',
    url: 'https://1kw20.fun/resource/audio/WildChinaTheme.mp3',
  },
  {
    id: `边程&房东的猫 - 美好事物-再遇少年.ogg${new Date().getTime().toString()}`,
    name: '边程&房东的猫 - 美好事物-再遇少年.ogg',
    url: 'https://1kw20.fun/resource/audio/边程&房东的猫 - 美好事物-再遇少年.ogg',
  },
  {
    id: `大乔小乔 - 相见难别亦难.ogg${new Date().getTime().toString()}`,
    name: '大乔小乔 - 相见难别亦难.ogg',
    url: 'https://1kw20.fun/resource/audio/大乔小乔 - 相见难别亦难.ogg',
  },
  {
    id: `你要跳舞吗-新裤子.mp3${new Date().getTime().toString()}`,
    name: '你要跳舞吗-新裤子.mp3',
    url: 'https://1kw20.fun/resource/audio/你要跳舞吗-新裤子.mp3',
  },
  {
    id: `生命-声音玩具.mp3${new Date().getTime().toString()}`,
    name: '生命-声音玩具.mp3',
    url: 'https://1kw20.fun/resource/audio/生命-声音玩具.mp3',
  },
  {
    id: `与非门 - Happy New Year.ogg${new Date().getTime().toString()}`,
    name: '与非门 - Happy New Year.ogg',
    url: 'https://1kw20.fun/resource/audio/与非门 - Happy New Year.ogg',
  },

]

export const defaultPrizeList = <IPrizeConfig[]>[
  {
    id: '001',
    name: '三等奖',
    sort: 1,
    isAll: false,
    count: 3,
    isUsedCount: 0,
    picture: {
      id: '2',
      name: '三等奖',
      url: 'https://1kw20.fun/resource/image/image3.png',
    },
    separateCount: {
      enable: true,
      countList: [],
    },
    desc: '三等奖',
    isShow: true,
    isUsed: false,
    frequency: 1,
  },
  {
    id: '002',
    name: '二等奖',
    sort: 2,
    isAll: false,
    count: 2,
    isUsedCount: 0,
    picture: {
      id: '1',
      name: '二等奖',
      url: 'https://1kw20.fun/resource/image/image2.png',
    },
    separateCount: {
      enable: false,
      countList: [],
    },
    desc: '二等奖',
    isShow: true,
    isUsed: false,
    frequency: 1,
  },
  {
    id: '003',
    name: '一等奖',
    sort: 3,
    isAll: false,
    count: 1,
    isUsedCount: 0,
    picture: {
      id: '0',
      name: '一等奖',
      url: 'https://1kw20.fun/resource/image/image1.png',
    },
    separateCount: {
      enable: false,
      countList: [],
    },
    desc: '一等奖',
    isShow: true,
    isUsed: false,
    frequency: 1,
  },
]
export const defaultCurrentPrize = <IPrizeConfig>{
  id: '001',
  name: '三等奖',
  sort: 1,
  isAll: false,
  count: 12,
  isUsedCount: 0,
  picture: {
    id: '2',
    name: '三等奖',
    url: 'https://1kw20.fun/resource/image/image3.png',
  },
  separateCount: {
    enable: true,
    countList: [],
  },
  desc: '三等奖',
  isShow: true,
  isUsed: false,
  frequency: 1,
}
export const defaultTemporaryPrize = <IPrizeConfig>{
  id: '',
  name: '',
  sort: 0,
  isAll: false,
  count: 1,
  isUsedCount: 0,
  picture: {
    id: '-1',
    name: '',
    url: '',
  },
  separateCount: {
    enable: true,
    countList: [],
  },
  desc: '',
  isShow: false,
  isUsed: false,
  frequency: 1,
}

export const defaultImageList = [
  {
    id: '0',
    name: '一等奖',
    url: 'https://1kw20.fun/resource/image/image1.png',
  },
  {
    id: '1',
    name: '二等奖',
    url: 'https://1kw20.fun/resource/image/image2.png',
  },
  {
    id: '2',
    name: '三等奖',
    url: 'https://1kw20.fun/resource/image/image3.png',
  },
]
export const defaultPatternList = [21, 38, 55, 54, 53, 70, 87, 88, 89, 23, 40, 57, 74, 91, 92, 93, 76, 59, 42, 25, 24, 27, 28, 29, 46, 63, 62, 61, 78, 95, 96, 97, 20, 19, 31, 48, 65, 66, 67, 84, 101, 100, 99, 32, 33]
