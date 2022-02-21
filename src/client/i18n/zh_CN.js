export default {
  nick: '昵称',
  mail: '邮箱',
  site: '网址',
  content: '评论你的想法~',
  cancel: '取消',
  preview: '预览',
  send: '发送',
  comment: '条评论',
  master: '博主',
  stick: '置顶',
  reply: '回复',
  timeAgo: {
    now: '刚刚',
    minutes: '分钟前',
    hours: '小时前',
    days: '天前'
  },
  pleaseLogin: '请登录后再使用管理员邮箱评论',
  sendError: '评论失败~',
  more: '更多评论',
  commentsError: '获取评论失败~',
  settingMsg: '正在加载管理面板...',
  refreshMsg: '正在刷新评论...',
  admin: {
    login: {
      login: '登录',
      close: '关闭',
      username: '用户名',
      password: '密码',
      msg: '自动登录中...',
      loginError: '用户名或密码错误'
    },
    manage: {
      comment: {
        msg: '自动获取评论中...',
        text: '评论管理',
        save: '保存',
        time: '时间',
        path: '路径',
        total: '共',
        bar: '条',
        page: '页',
        search: {
          text: '搜索',
          close: '关闭',
          title: '搜索评论',
          options: {
            all: '全部',
            ip: 'IP',
            nick: '昵称',
            mail: '邮箱',
            site: '网址',
            content: '内容',
            path: '路径'
          }
        },
        batch: {
          operateMsg: '至少选择一条评论',
          operate: {
            default: '默认',
            accept: '通过',
            audit: '审核',
            spam: '垃圾',
            delete: '删除'
          }
        },
        operate: {
          stick: '置顶',
          accept: '通过',
          audit: '审核',
          edit: '编辑',
          spam: '垃圾',
          delete: '删除'
        },
        options: {
          current: '当前页',
          accept: '已通过',
          audit: '待审核',
          spam: '垃圾',
          master: '我的'
        }
      },
      config: {
        msg: '自动获取配置中...',
        error: '获取配置失败',
        text: '配置管理',
        save: '保存',
        passwordError: '密码不一致',
        settings: {
          basic: {
            name: '基本配置',
            // username
            user: {
              title: '用户名',
              desc: '登录用户名',
              ph: '名称'
            },
            mail: {
              title: '管理员邮箱',
              desc: '确认管理员身份',
              ph: 'mail@example.com'
            },
            domain: {
              title: '安全域名',
              desc: '限制其他第三方网站请求进行拦截(多个使用逗号分隔)',
              ph: 'example.com,www.example.com'
            },
            headers: {
              title: '请求头优先级',
              desc: '为确保获取的用户IP是真实性(多个使用逗号分隔)',
              ph: 'headers.cf-connecting-ip'
            }
          },
          commentHandle: {
            name: '评论处理',
            // commentCount
            count: {
              title: '评论数',
              desc: '每次获取多少条评论',
              ph: 6
            },
            // wordNumber
            word: {
              title: '字数限制',
              desc: '评论内容,昵称,邮箱,网址 (以英文逗号分割，只输入一个0代表所有不限制)',
              ph: 0
            },
            limit: {
              title: '限制',
              desc: '限制10分钟内，每个IP能评论多少条',
              ph: 0
            },
            limitAll: {
              title: '限制所有人',
              desc: '限制所有人10分钟内，所有IP能评论多少条',
              ph: 0
            },
            // avatarCdn
            cdn: {
              title: '头像CDN',
              desc: '评论头像CDN地址',
              ph: 'https://cn.gravatar.com/avatar/'
            },
            akismet: {
              title: 'Akismet',
              desc: '垃圾评论检测处理',
              ph: 'Akismet Key'
            }
          },
          mail: {
            name: '邮件提醒',
            // siteUrl
            site: {
              title: '网站地址',
              desc: '邮件内快速跳转到网站评论区',
              ph: 'https://blog.example.com'
            },
            // serverURLs
            server: {
              title: '服务端地址',
              desc: '评论系统服务端地址(与客户端的serverURLs一致)',
              ph: 'https://server-discuss.example.com'
            },
            // mailHost
            host: {
              title: '服务商主机',
              desc: '例如: 腾讯企业主机',
              ph: 'smtp.exmail.qq.com'
            },
            // mailPort
            port: {
              title: '服务商主机端口',
              desc: '例如: 腾讯企业主机端口',
              ph: 465
            },
            // mailFrom
            from: {
              title: '发件人',
              ph: '例如: server@example.com'
            },
            // mailAccept
            accept: {
              title: '授权码或密码',
              desc: '每个服务商各有不同'
            },
            // masterSubject
            Msubject: {
              title: '邮件标题(管理员)',
              desc: '管理员收到的评论邮件标题',
              ph: '您在「Discuss 官网」上有新的评论啦！'
            },
            // replySubject
            Rsubject: {
              title: '邮件标题(评论者)',
              desc: '其他人收到的评论标题',
              ph: '您在「Discuss 官网」上有新的评论回复啦！'
            },
            // masterTemplate
            Mtemplate: {
              title: '邮件模板(管理员)',
              desc: '管理员收到的评论邮件模板'
            },
            // replyTemplate
            Rtemplate: {
              title: '邮件模板(评论者)',
              desc: '其他人收到的评论模板'
            }
          },
          password: {
            name: '修改密码',
            // password
            pwd: '新密码',
            // confirm
            cfm: '确认密码'
          }
        }
      }
    }
  }
}
