function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

Vue.createApp({
  data() {
    return {
      nameUser: "Harry Tran",
      className: 201,
    };
  },
}).mount("#interpolation");

Vue.createApp({
  data() {
    return {
      ImgUrl:
        "https://cdn.baogiaothong.vn/upload/images/2021-3/article_img/2021-07-07/img-bgt-2021-unnamed-1--1625645540-width700height1050.jpg",
      linkInfo: "https://vi.wikipedia.org/wiki/Lisa_(rapper)",
    };
  },
}).mount("#bind-attribute");

Vue.createApp({
  methods: {
    CreateNodeNum() {
      const diceArray = [
        getRandomInt(1, 6),
        getRandomInt(1, 6),
        getRandomInt(1, 6),
      ];
      const nodeNum = diceArray.reduce((sum, roll) => (sum += roll), 0);
      return nodeNum;
    },
    renderSicBo() {
      const soNut = this.CreateNodeNum();
      if (soNut > 11) {
        return "Sic";
      } else {
        return "Bo";
      }
    },
  },
}).mount("#method");

Vue.createApp({
  data() {
    return {
      message: `<h1> Learn VueJS is awesome </h1>`,
    };
  },
}).mount("#raw-html");

Vue.createApp({
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    handleClickMe(event) {
      console.log(event.target);
      console.log("click me");
    },
    handleIncrement(params, event) {
      console.log(event.target);
      this.count = this.count + params;
    },
    hanldeSubmit() {
      alert("submit successfully");
    },
    handleLogin() {
      console.log("handleLogin");
    },
  },
}).mount("#event");

Vue.createApp({
  data() {
    return {
      message: "",
    };
  },
  methods: {},
}).mount("#two-way-binding");

Vue.createApp({
  data() {
    return {
      count: 0,
      lastName: "Harry",
      firstName: "Lionel",
      fullDataName: "",
    };
  },
  /**
   * watch use to:
   *    - monitor 1 unique data
   */
  watch: {
    count(newValue, oldValue) {
      console.log("newValue : ", newValue);
      console.log("oldValue : ", oldValue);
      if (newValue > 10) {
        this.count = 0;
      }
    },
    lastName(newValue) {
      this.fullDataName = newValue + " " + this.firstName;
    },
    firstName(newValue) {
      this.fullDataName = this.lastName + " " + newValue;
    },
  },
  /**
   * computed use to process:
   *    - calculate various data v?? display the result for the user
   */
  computed: {
    fullName() {
      console.log("run fullName");
      return this.lastName + " " + this.firstName;
    },
  },
  /**
   * methods use to process:
   *    - events
   *    - function ( web app features )
   */
  methods: {
    // getFullName() {
    //   console.log("run getFullName");
    //   return this.lastName + " " + this.firstName;
    // }, // sai v?? hong thay ?????i m?? v???n ch???y l???i l??m cho ch??ng ta b??? m???t hi???u n??ng
    handleIncrement() {
      this.count += 1;
      this.firstName = "Harry Potter";
    },
  },
}).mount("#computed-and-watchers");

Vue.createApp({
  data() {
    return {
      active: false,
      styleForP: {
        backgroundColor: "red",
        color: "yellow",
        "font-size": "50px",
      },
      styleForText: {
        "text-align": "left",
      },
    };
  },
  methods: {
    hanldStyle() {
      this.styleForP.color = "blue";
    },
    handleActive() {
      this.active = true;
    },
  },
}).mount("#styling");

Vue.createApp({
  data() {
    return {
      isLogin: false,
      nameHero: "",
      blackpink: [
        {
          name: "Lisa",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/0/00/Blackpink_Lisa_190621_2.png",
        },
        {
          name: "Rose",
          image:
            "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRFMa9nywjuWgjQe8jO3UP9A29ggO6s0K8iEXAdrvCMcj5TSvxglNEnXaf-68OW",
        },
        {
          name: "jennie",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/3/3b/191001_Jennie_Kim_attends_CHANEL_Show_at_Paris_Fashion_Week_2019_%281%29.jpg",
        },
        {
          name: "Kim Jong Kook",
          image:
            "https://static2.yan.vn/YanNews/2167221/202107/163646839_151261790203234_4588702925784176269_n-980bbe54.jpg",
        },
        {
          name: "Song Ji Hyo",
          image:
            "https://static2.yan.vn/YanNews/2167221/202107/163646839_151261790203234_4588702925784176269_n-980bbe54.jpg",
        },
      ],
    };
  },
  methods: {
    handleLogin() {
      this.isLogin = true;
    },
    handleNameHero(nameHero) {
      this.nameHero = nameHero;
    },
  },
}).mount("#directive");
