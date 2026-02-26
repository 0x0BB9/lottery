import type { IPersonConfig, IPrizeConfig, IPrizeItem } from '@/types/storeType'
import prizeImg01white from '@/assets/images/01white.jpg'
import prizeImg02glod from '@/assets/images/02glod.jpg'
import prizeImg02gray from '@/assets/images/02gray.jpg'
import prizeImg03black from '@/assets/images/03black.jpg'
import prizeImg03white from '@/assets/images/03white.jpg'

export const defaultPersonList = <IPersonConfig[]>
[{uid:'U100156001',name:'艾荣斌',department:'产品部',identity:'产品经理',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:1,y:1,id:0,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156002',name:'邵凯莉',department:'技术部',identity:'前端开发工程师',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:2,y:1,id:1,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156003',name:'代一凡',department:'技术部',identity:'后端开发工程师',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:3,y:1,id:2,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156004',name:'李明',department:'设计部',identity:'UI/UX设计师',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:4,y:1,id:3,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156005',name:'李明1',department:'设计部',identity:'UI/UX设计师',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:4,y:1,id:4,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156006',name:'张伟',department:'市场部',identity:'市场专员',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:5,y:1,id:5,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156007',name:'李明2',department:'设计部',identity:'UI/UX设计师',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:6,y:1,id:6,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156008',name:'王宇',department:'产品部',identity:'产品经理',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:7,y:1,id:7,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156009',name:'李欣',department:'销售部',identity:'销售经理',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:8,y:1,id:8,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156010',name:'刘涛',department:'技术部',identity:'开发工程师',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:9,y:1,id:9,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156011',name:'赵娟',department:'设计部',identity:'UI设计师',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:10,y:1,id:10,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156012',name:'王丽',department:'销售部',identity:'销售专员',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:11,y:1,id:11,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156013',name:'陈晨',department:'市场部',identity:'市场专员',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:12,y:1,id:12,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156014',name:'李强',department:'开发部',identity:'高级开发工程师',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:13,y:1,id:13,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156015',name:'孙璇',department:'设计部',identity:'UI设计师',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:14,y:1,id:14,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156016',name:'周超',department:'产品部',identity:'产品经理',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:15,y:1,id:15,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156017',name:'杨帆',department:'技术部',identity:'前端开发工程师',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:16,y:1,id:16,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156018',name:'朱琳',department:'设计部',identity:'UI/UX设计师',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:17,y:1,id:17,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156019',name:'邓琳',department:'技术部',identity:'后端开发工程师',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:18,y:1,id:18,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156020',name:'孙彬',department:'销售部',identity:'销售专员',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:19,y:1,id:19,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156021',name:'何亮',department:'市场部',identity:'市场专员',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:20,y:1,id:20,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156022',name:'刘涛1',department:'技术部',identity:'开发工程师',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:21,y:1,id:21,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156023',name:'陈静',department:'设计部',identity:'UI设计师',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:22,y:1,id:22,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156024',name:'冯勇',department:'技术部',identity:'后端开发工程师',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:23,y:1,id:23,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156025',name:'沈丹',department:'销售部',identity:'销售经理',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:24,y:1,id:24,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156026',name:'吴雪',department:'市场部',identity:'市场专员',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:25,y:1,id:25,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156027',name:'陆晨',department:'技术部',identity:'前端开发工程师',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:26,y:1,id:26,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156028',name:'朱丽',department:'设计部',identity:'UI/UX设计师',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:27,y:1,id:27,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156029',name:'王超',department:'技术部',identity:'后端开发工程师',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:28,y:1,id:28,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156030',name:'赵岩',department:'销售部',identity:'销售经理',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:29,y:1,id:29,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156031',name:'刘薇',department:'市场部',identity:'市场专员',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:30,y:1,id:30,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156032',name:'郭云',department:'开发部',identity:'前端开发工程师',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:31,y:1,id:31,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156033',name:'黄艳',department:'设计部',identity:'UI设计师',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:32,y:1,id:32,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156034',name:'李云',department:'技术部',identity:'后端开发工程师',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:33,y:1,id:33,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156035',name:'赵鹏',department:'销售部',identity:'销售专员',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:34,y:1,id:34,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156036',name:'曾琪',department:'市场部',identity:'市场专员',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:35,y:1,id:35,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156037',name:'吕欣',department:'技术部',identity:'前端开发工程师',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:36,y:1,id:36,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156038',name:'蒋伟',department:'销售部',identity:'销售经理',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:37,y:1,id:37,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156039',name:'朱峰',department:'设计部',identity:'UI设计师',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:38,y:1,id:38,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156040',name:'王婷',department:'技术部',identity:'前端开发工程师',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:39,y:1,id:39,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156041',name:'李海',department:'产品部',identity:'产品经理',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:40,y:1,id:40,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156042',name:'陈磊',department:'销售部',identity:'销售专员',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:41,y:1,id:41,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156043',name:'郑凯',department:'技术部',identity:'后端开发工程师',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:42,y:1,id:42,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156044',name:'林果',department:'市场部',identity:'市场专员',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:43,y:1,id:43,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156045',name:'何晨',department:'产品部',identity:'产品经理',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:44,y:1,id:44,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156046',name:'周婷',department:'设计部',identity:'UI设计师',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:45,y:1,id:45,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156047',name:'孙杰',department:'技术部',identity:'前端开发工程师',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:46,y:1,id:46,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156048',name:'魏璇',department:'市场部',identity:'市场专员',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:47,y:1,id:47,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156049',name:'钟文',department:'产品部',identity:'产品经理',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:48,y:1,id:48,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156050',name:'张莉',department:'技术部',identity:'后端开发工程师',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:49,y:1,id:49,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156051',name:'黄丽',department:'设计部',identity:'UI/UX设计师',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:50,y:1,id:50,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156052',name:'林倩',department:'销售部',identity:'销售专员',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:51,y:1,id:51,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156053',name:'王晓',department:'市场部',identity:'市场专员',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:52,y:1,id:52,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156054',name:'刘霞',department:'技术部',identity:'前端开发工程师',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:53,y:1,id:53,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156055',name:'赵慧',department:'产品部',identity:'产品经理',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:54,y:1,id:54,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156056',name:'冯鹏',department:'技术部',identity:'前端开发工程师',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:55,y:1,id:55,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156057',name:'吴峰',department:'设计部',identity:'UI设计师',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:56,y:1,id:56,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156058',name:'杨军',department:'市场部',identity:'市场专员',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:57,y:1,id:57,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156059',name:'许丽',department:'销售部',identity:'销售专员',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:58,y:1,id:58,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156060',name:'高媛',department:'技术部',identity:'后端开发工程师',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:59,y:1,id:59,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156061',name:'刘娟',department:'产品部',identity:'产品经理',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:60,y:1,id:60,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156062',name:'邱婷',department:'市场部',identity:'市场专员',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:61,y:1,id:61,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156063',name:'曹晨',department:'销售部',identity:'销售专员',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:62,y:1,id:62,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156064',name:'朱阳',department:'技术部',identity:'前端开发工程师',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:63,y:1,id:63,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156065',name:'范雨',department:'设计部',identity:'UI设计师',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:64,y:1,id:64,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156066',name:'高玲',department:'市场部',identity:'市场专员',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:65,y:1,id:65,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156067',name:'贾志',department:'销售部',identity:'销售专员',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:66,y:1,id:66,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156068',name:'李慧',department:'技术部',identity:'后端开发工程师',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:67,y:1,id:67,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156069',name:'唐琳',department:'产品部',identity:'产品经理',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:68,y:1,id:68,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156070',name:'王凤',department:'市场部',identity:'市场专员',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:69,y:1,id:69,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156071',name:'赵敏',department:'销售部',identity:'销售专员',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:70,y:1,id:70,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156072',name:'陈晨',department:'技术部',identity:'前端开发工程师',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:71,y:1,id:71,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156073',name:'林萍',department:'设计部',identity:'UI设计师',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:72,y:1,id:72,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156074',name:'黄蕾',department:'市场部',identity:'市场专员',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:73,y:1,id:73,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156075',name:'杨珊',department:'销售部',identity:'销售专员',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:74,y:1,id:74,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156076',name:'孟超',department:'技术部',identity:'后端开发工程师',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:75,y:1,id:75,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156077',name:'张浩',department:'产品部',identity:'产品经理',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:76,y:1,id:76,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156078',name:'李颖',department:'市场部',identity:'市场专员',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:77,y:1,id:77,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156079',name:'周茜',department:'销售部',identity:'销售专员',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:78,y:1,id:78,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156080',name:'何媛',department:'技术部',identity:'前端开发工程师',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:79,y:1,id:79,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156081',name:'王阳',department:'市场部',identity:'市场专员',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:80,y:1,id:80,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156082',name:'冯琳',department:'设计部',identity:'UI设计师',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:81,y:1,id:81,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156083',name:'何旭',department:'产品部',identity:'产品经理',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:82,y:1,id:82,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156084',name:'刘超',department:'销售部',identity:'销售专员',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:83,y:1,id:83,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156085',name:'郑晓',department:'技术部',identity:'后端开发工程师',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:84,y:1,id:84,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156086',name:'朱琦',department:'设计部',identity:'UI设计师',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:85,y:1,id:85,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156087',name:'王悦',department:'市场部',identity:'市场专员',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:86,y:1,id:86,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156088',name:'徐文',department:'产品部',identity:'产品经理',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:87,y:1,id:87,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156089',name:'王珊',department:'销售部',identity:'销售专员',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:88,y:1,id:88,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156090',name:'许鹏',department:'技术部',identity:'前端开发工程师',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:89,y:1,id:89,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156091',name:'段伟',department:'市场部',identity:'市场专员',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:90,y:1,id:90,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156092',name:'郑睿',department:'设计部',identity:'UI设计师',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:91,y:1,id:91,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156093',name:'高翔',department:'产品部',identity:'产品经理',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:92,y:1,id:92,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156094',name:'潘亮',department:'销售部',identity:'销售专员',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:93,y:1,id:93,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156095',name:'赵丽',department:'技术部',identity:'后端开发工程师',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:94,y:1,id:94,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156096',name:'孙瑶',department:'设计部',identity:'UI设计师',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:95,y:1,id:95,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156097',name:'高飞',department:'产品部',identity:'产品经理',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:96,y:1,id:96,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156098',name:'李涛',department:'销售部',identity:'销售专员',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:97,y:1,id:97,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156099',name:'张洁',department:'技术部',identity:'前端开发工程师',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:98,y:1,id:98,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156100',name:'郑晨',department:'市场部',identity:'市场专员',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:99,y:1,id:99,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156101',name:'李怡',department:'设计部',identity:'UI设计师',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:100,y:1,id:100,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156102',name:'黄晓',department:'产品部',identity:'产品经理',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:101,y:1,id:101,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156103',name:'孙红',department:'销售部',identity:'销售专员',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:102,y:1,id:102,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156104',name:'王丽',department:'技术部',identity:'前端开发工程师',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:103,y:1,id:103,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156105',name:'冯磊',department:'市场部',identity:'市场专员',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:104,y:1,id:104,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'},{uid:'U100156106',name:'李博',department:'设计部',identity:'UI设计师',avatar:'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',x:105,y:1,id:105,isWin:false,createTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',updateTime:'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)',prizeName:[],prizeTime:[],prizeId:[],country:'中国'}]

export function getPrizeNameByIdAndIndex(id: number | string, index: number): string | undefined {
  const prizeItem = defaultPrizeNameList.find(item => item.id === id);
  return prizeItem ? prizeItem.name[index] : undefined;
}
export function getPrizeImage(id: number | string, index: number): string | undefined {
  const prizeItem = defaultPrizeNameList.find(item => item.id === id);
  return prizeItem && prizeItem.bg && prizeItem.bg[index] ? prizeItem.bg[index] : undefined;
}
export const defaultPrizeNameList = <IPrizeItem[]>[
  {
    id: '001',
    name: [
      "摩飞多功能料理锅经济款",
      "摩飞多功能料理锅经济款",
      "摩飞多功能料理锅经济款",
      "摩飞多功能料理锅经济款",
      "摩飞多功能料理锅经济款",
      "罗技G502创始者无线游戏鼠标",
      "罗技G502创始者无线游戏鼠标",
      "罗技G502创始者无线游戏鼠标",
      "罗技G502创始者无线游戏鼠标",
      "罗技G502创始者无线游戏鼠标",
    ],
  },
  {
    id: '002',
    name: [
      "飞利浦全自动咖啡机",
      "飞利浦全自动咖啡机",
      "苏泊尔即热饮水机",
      "苏泊尔即热饮水机"
    ],
  },
  {
    id: '003',
    name: ['戴森吹风机', '追觅洗地机 t60 ultra'],
  },
  {
    id: '004',
    name: ['大疆 pocket 3', '极米投影仪'],
  },
  {
    id: '005',
    name: ['iphone17 pro max 512GB'],
    bg: [prizeImg01white]
  }

]
export const defaultPrizeList = <IPrizeConfig[]>[
  {
    id: '001',
    name: '幸运奖',
    sort: 1,
    isAll: false,
    count: 10,
    isUsedCount: 0,
    picture: {
      id: '4',
      name: '幸运奖',
      url: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
    },
    separateCount: {
      enable: true,
      countList: [],
    },
    desc: '幸运奖',
    isShow: true,
    isUsed: false,
    frequency: 1,
  },
  {
    id: '002',
    name: '三等奖',
    sort: 2,
    isAll: false,
    count: 4,
    isUsedCount: 0,
    picture: {
      id: '4',
      name: '三等奖',
      url: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
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
    id: '003',
    name: '二等奖',
    sort: 3,
    isAll: false,
    count: 2,
    isUsedCount: 0,
    picture: {
      id: '3',
      name: '二等奖',
      url: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
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
    id: '004',
    name: '一等奖',
    sort: 4,
    isAll: false,
    count: 2,
    isUsedCount: 0,
    picture: {
      id: '2',
      name: '一等奖',
      url: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
    },
    separateCount: {
      enable: true,
      countList: [],
    },
    desc: '一等奖',
    isShow: true,
    isUsed: false,
    frequency: 1,
  },
  {
    id: '005',
    name: '特等奖',
    sort: 5,
    isAll: false,
    count: 1,
    isUsedCount: 0,
    picture: {
      id: '1',
      name: '特等奖',
      url: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
    },
    separateCount: {
      enable: false,
      countList: [],
    },
    desc: '特等奖',
    isShow: true,
    isUsed: false,
    frequency: 1,
  }
]
export const defaultCurrentPrize = <IPrizeConfig>{
  id: '001',
  name: '幸运奖',
  sort: 1,
  isAll: false,
  count: 10,
  isUsedCount: 0,
  picture: {
    id: '4',
    name: '幸运奖',
    url: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
  },
  separateCount: {
    enable: true,
    countList: [],
  },
  desc: '幸运奖',
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
    url: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
  },
  {
    id: '1',
    name: '二等奖',
    url: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
  },
  {
    id: '2',
    name: '三等奖',
    url: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
  },
]
export const defaultPatternList = [
  21,
  38,
  55,
  54,
  53,
  70,
  87,
  88,
  89,
  23,
  40,
  57,
  74,
  91,
  92,
  93,
  76,
  59,
  42,
  25,
  24,
  27,
  28,
  29,
  46,
  63,
  62,
  61,
  78,
  95,
  96,
  97,
  20,
  19,
  31,
  48,
  65,
  66,
  67,
  84,
  101,
  100,
  99,
  32,
  33,
  82
]

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
