interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [
  {
    name: 'Home',
    url: '/dashboard',
    icon: 'icon-speedometer'
  },
  {
    title: true,
    name: 'Admin'
  },
  {
    name: 'Messages',
    url: '#',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Create',
        url: '/dashboard/createMessages',
        icon: 'icon-envelope'
      },
      {
        name: 'View',
        url: '/dashboard/viewMessages',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    title: true,
    name: 'Users'
  },
  {
    name: 'Users',
    url: '#',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Create',
        url: '/dashboard/createUser',
        icon: 'icon-envelope'
      },
      {
        name: 'View',
        url: '/dashboard/viewUsers',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    title: true,
    name: 'Others',
  },
  {
    name: 'Pages',
    url: '/pages',
    icon: 'icon-star',
    children: [
      {
        name: 'Login',
        url: '/login',
        icon: 'icon-star'
      },
      {
        name: 'Register',
        url: '/register',
        icon: 'icon-star'
      },
      {
        name: 'Error 404',
        url: '/404',
        icon: 'icon-star'
      },
      {
        name: 'Error 500',
        url: '/500',
        icon: 'icon-star'
      }
    ]
  },
  {
    name: 'Confidential Link',
    url: '#',
    icon: 'icon-ban',
    attributes: { disabled: true},
  }
];
