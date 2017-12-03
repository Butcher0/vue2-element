const userMap = {
  admin: {
    role: ['admin'],
    token: 'admin',
    introduction: 'I am super admin.',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
  },
  editor: {
    role: ['editor'],
    token: 'editor',
    introduction: 'I am editor.',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  }
}

export default {
  login: config => {
    const { username } = JSON.parse(config.body)
    return userMap[username]
  },
}