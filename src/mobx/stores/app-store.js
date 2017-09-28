import {extendObservable, action} from 'mobx';
import map from 'lodash/map';

class AppStore {
  constructor() {
    extendObservable(this, {
      title: 'CodeAmp Panel',
      user: null,
      leftNavItems: [],
      ws: {
        channel: null,
        data: null,
      },
      snackbar: {
        created: null,
        msg: null,
      },
      drawer: {
        component: null,
        open: false,
      },
    });
  }

  setTitle = action(title => {
    this.title = title;
  });

  setNavProjects = action(projects => {
    this.leftNavItems = []
    map(projects, (project)=>{
      this.leftNavItems.push({
        key: project.id,
        name: project.name,
        slug: "/projects/"+project.slug,
      })
    });
  });

  setSnackbar = action(params => {
    console.log(params)
    this.snackbar.created = new Date();
    this.snackbar.msg = params.msg;
  })

  setDrawer = action(params => {
    console.log(params)
    this.drawer.component = params.component;
    this.drawer.open = true;
  })

  setUser = action(user => {
    let { localStorage } = window
    this.user = user
    localStorage.setItem('user', user);
  });


}

export default AppStore;
