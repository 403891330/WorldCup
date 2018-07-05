App = {
  web3Provider: null,
  contracts: {},
  gas:500000,
  initABI:[{"constant":true,"inputs":[{"name":"_gameID","type":"uint256"}],"name":"getPool","outputs":[{"name":"bounsp","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"games","outputs":[{"name":"_bouns","type":"uint256"},{"name":"_playType","type":"uint256"},{"name":"_stop","type":"bool"},{"name":"_beginTime","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"bstop","type":"bool"},{"name":"gameID","type":"uint256"}],"name":"setTeamStatus","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_gameID","type":"uint256"},{"name":"_one","type":"uint256"},{"name":"_two","type":"uint256"},{"name":"_three","type":"uint256"},{"name":"_buyCount","type":"uint256"},{"name":"buyPrice","type":"uint256"}],"name":"buy","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"_gameID","type":"uint256"}],"name":"getListTeam","outputs":[{"name":"_bouns","type":"uint256"},{"name":"_teams","type":"uint256[]"},{"name":"_teamPrice","type":"uint256[]"},{"name":"_playType","type":"uint256"},{"name":"_stop","type":"bool"},{"name":"_beginTime","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getBonusPoolTotal","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"winner","type":"address[]"},{"name":"amount","type":"uint256[]"},{"name":"_gameID","type":"uint256"},{"name":"_buyerType","type":"uint256"},{"name":"amount_total","type":"uint256"}],"name":"batchShareAmount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"destroy","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_teams","type":"uint256[]"},{"name":"_tPrice","type":"uint256[]"},{"name":"gameID","type":"uint256"}],"name":"setTeamPrice","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"winner","type":"address"},{"name":"amount","type":"uint256"},{"name":"_buyerType","type":"uint256"},{"name":"_gameID","type":"uint256"}],"name":"shareAmount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_teams","type":"uint256[]"},{"name":"_tPrice","type":"uint256[]"},{"name":"_gameType","type":"uint256"},{"name":"_beginTime","type":"uint256"}],"name":"createGame","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_one","type":"uint256"},{"name":"_gameID","type":"uint256"},{"name":"_buyCount","type":"uint256"},{"name":"_buyPrice","type":"uint256"}],"name":"buyTwo","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"_gameType","type":"uint256"}],"name":"getListTeamByPlayType","outputs":[{"name":"teamIDss","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"buyer","type":"address"},{"indexed":true,"name":"traddingTime","type":"uint256"},{"indexed":false,"name":"first","type":"uint256"},{"indexed":false,"name":"second","type":"uint256"},{"indexed":false,"name":"three","type":"uint256"},{"indexed":false,"name":"gameid","type":"uint256"},{"indexed":false,"name":"buyType","type":"uint256"},{"indexed":false,"name":"buyTotal","type":"uint256"},{"indexed":false,"name":"buyPrice","type":"uint256"}],"name":"BuyWinner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"first","type":"uint256"},{"indexed":true,"name":"second","type":"uint256"},{"indexed":true,"name":"third","type":"uint256"},{"indexed":false,"name":"buyer","type":"address"},{"indexed":false,"name":"traddingTime","type":"uint256"},{"indexed":false,"name":"gameid","type":"uint256"},{"indexed":false,"name":"buyType","type":"uint256"},{"indexed":false,"name":"buyTotal","type":"uint256"},{"indexed":false,"name":"buyPrice","type":"uint256"}],"name":"BuyWinnerList","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"buyer","type":"address"},{"indexed":true,"name":"first","type":"uint256"},{"indexed":true,"name":"gameid","type":"uint256"},{"indexed":false,"name":"traddingTime","type":"uint256"},{"indexed":false,"name":"buyType","type":"uint256"},{"indexed":false,"name":"buyPrice","type":"uint256"},{"indexed":false,"name":"buyTotal","type":"uint256"}],"name":"BuyWinnerTwo","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"buyer","type":"address"},{"indexed":true,"name":"traddingTime","type":"uint256"},{"indexed":true,"name":"buyerType","type":"uint256"},{"indexed":false,"name":"gameID","type":"uint256"},{"indexed":false,"name":"remainingAmount","type":"uint256"}],"name":"ShareBonus","type":"event"}],
  adr:"0x53F671AEF0A803085F6e3A6C215Dd88454394F3e",
  init: function() {
    return App.initWeb3();
  },

  initWeb3: function() {
    // Initialize web3 and set the provider to the testRPC.
    if (typeof web3 !== 'undefined') {
      App.web3Provider = web3.currentProvider;

    } else {
      // set the provider you want from Web3.providers
      App.web3Provider = new Web3.providers.HttpProvider('https://mainnet.infura.io/qxI3PTk3nnMi6XHDxDxx');
      // web3 = new Web3(App.web3Provider);
    }
    web3 = new Web3(App.web3Provider);
    web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }
      var account = accounts[0];
      // console.log(App.account);

    });

    return App.initContract();
  },

  initContract: function() {
  return  new Promise ((resolve,reject)=>{
      var metacoin = web3.eth.contract(App.initABI);//.at(address);
      App.contracts.TutorialToken = metacoin.at(App.adr);
      // App.contracts.TutorialToken.getBonusPoolTotal(function(error, result){
      //   console.log(result);
      // });
    // $.getJSON('WorldCupWinner.json', function(data) {
    //   // Get the necessary contract artifact file and instantiate it with truffle-contract.
    //   var TutorialTokenArtifact = data;
    //   App.contracts.TutorialToken = TruffleContract(TutorialTokenArtifact);
    //
    //   // Set the provider for our contract.
    //   App.contracts.TutorialToken.setProvider(App.web3Provider);

      // Use our contract to retieve and mark the adopted pets.
      resolve();
      return App.bindEvents();
      })
  },


  bindEvents: function() {
  //创建比赛
  $(document).on('click', '#createteam', App.handleTransfer);

  //玩法一购买
  $(document).on('click', '#buyteam', App.buyTeamOne);

  //玩法二购买
  $(document).on('click', '#buytwoteam', App.buyTeamTwo);

  //分享玩法一中奖名单
  $(document).on('click', '#playOneUser', App.getWinnersOne);

  //分享玩法二中奖名单
  $(document).on('click', '#playTwoUser', App.getWinnersTwo);
  //结束某场比赛
  $(document).on('click', '#stopGame', App.stopGame);

  //玩法一交易记录
	$(document).on('click', '#gettraddingOne', App.getTraddingOne);

  //玩法二交易记录
  $(document).on('click', '#getTraddingTwo', App.getTraddingTwo);

  //奖金分配记录
  $(document).on('click', '#sharePooList', App.ShareBonus);


  //查询本场比赛数据
  $(document).on('click', '#getfootable', App.getListTeamById);

   //查询玩法里面的所有比赛``
	$(document).on('click', '#getteam', App.getGameList);

  //查询奖金池
  $(document).on('click', '#getpool', App.getPool);

  //设置手续费
  // $(document).on('click', '#charge', App.handelSeviceCharge);


  //设置某场比赛球队价格
  $(document).on('click', '#teamPrice', App.handelTeamPrice);
},

//-----------创建比赛--------------
  handleTransfer: function(event) {
    event.preventDefault();
    var teams=new Array();
    var tPrice=new Array();
    var createType =  document.getElementById('createType').value;
    var price = document.getElementById('create_price').value.split(',');
    var beginTime = document.getElementById('beginTime').value;

    //传入价格
    for(var i = 0;i<price.length;i++){
      tPrice.push(web3.toWei(price[i]));
    }
    //传入球队id
     teams = document.getElementById('create_id').value.split(',');
    App.creatteamList(teams, tPrice, createType,beginTime);
  },

  creatteamList:function(teams, tPrice, createType,beginTime)
  {
    web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }
      var account = accounts[0];
      App.contracts.TutorialToken.createGame(teams, tPrice, createType,beginTime, {from: account, gas:gas},function(){});
    });
  },


//---------------------------(新)获取总奖金池-------------------
    getPoolNew:function()
    {
      return new Promise((resolve,reject)=>{
        App.contracts.TutorialToken.getBonusPoolTotal(function(err,result){
          if (!err) {
            resolve(result.toNumber());
          }
          else {
              reject(err);
          }
        });
    });
  },

//---------------------------获取总奖金池(根据场次来的)-------------------
    getPool:function (event){
      event.preventDefault();
      App.getPoolNew(function(err,result){
        if (!err) {
            console.log(result);
        }
        else {
          console.log(err.message);
        }
      });
    },



//---------------------------设置每场比赛的球队和每支球队的价格-------------------
  handelTeamPrice:function(event){
    event.preventDefault();
    //对应的球队编号
    var teams = document.getElementById('teamPrice_Number').value.split(',');

    //球队对应的价格
    var teamprice = document.getElementById('teamPrice_eth').value.split(',');
    var tPrice=new Array();
    for(var i = 0;i<teamprice.length;i++)
    {
      tPrice.push(web3.toWei(teamprice[i],'ether'));
    }
    var gameid = document.getElementById('teamPrice_id').value;
    App.handelTeamPriceFun(teams,tPrice,gameid);
  },

  handelTeamPriceFun:function(teams,tPrice,gameid)
  {
    web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }
      var account = accounts[0];

      App.contracts.TutorialToken(teams,tPrice,gameid, {from: account, gas:gas},function(){});

    });
  },



///-------------传入玩法参数返回对应的场次ID----------
  getGameList: function(event) {
  event.preventDefault();
  var type =  document.getElementById("getteam_txt").value;
   App.getGameListFun(type,function(err,result){
     if (!err) {
       console.log(result);
     }else {
       console.log(err.message);
     }
   });
  },

  getGameListFun:function(type)
  {
    return new Promise((resolve,reject)=> {
     App.contracts.TutorialToken.getListTeamByPlayType(type,function(err,result){
       if (!err) {
         //0 要移除第一个数据
          result = result.splice(1);
           resolve(result.toString());
       }else {
         reject(err);
       }
     });
    });
},



///------------------根据场次ID，获取该场比赛的信息---------
  getListTeamById:function(event){
      event.preventDefault();
      var gameid = document.getElementById("getfootable_txt").value;
       App.getListTeamByIdFun(gameid,function(err,result){
       if (!err) {
           console.log(result);
       }else {
         console.log(err.message);
       }
     });
  },

  getListTeamByIdFun:function(gameid)
  {
    return new Promise((resolve,reject)=>{
        App.contracts.TutorialToken.getListTeam(gameid,function(err,result){
          if (!err) {
              resolve(result);
          }else {
            reject(err);
          }
        });
    });
  },

//---------------------------玩法一 购买球队-------------------
  buyTeamOne: function(event) {
    event.preventDefault();

  var teamsid =  document.getElementById("buyteam_id").value.split(',');
  var zhushu =  document.getElementById("buyteam_number").value;
  var gameid =  document.getElementById("buyteam_gameid").value;
  var total =  document.getElementById("buyteam_total").value;

   var price =  parseFloat(total) * parseInt(zhushu);

    App.buyTeamOneFun(gameid,teamsid[0],teamsid[1],teamsid[2],zhushu,price,function(err,result){
      if(!err)
      {
        console.log(result);
      }
      else {
        console.log(err);
      }
    })
  },

  buyTeamOneFun:function(gameid,one,two,three,buyCount,price)
  {
    return new Promise((resolve,reject)=>{
      web3.eth.getAccounts(function(error, accounts) {
         var account = accounts[0];
         let initPrice =  web3.toWei(price,'ether');
         //加上5%的手续费
         var totalPrice = (initPrice * 0.05) +  initPrice * 1;
         let count = parseInt(buyCount);
        App.contracts.TutorialToken.buy( parseInt(gameid), parseInt(one), parseInt(two), parseInt(three),  parseInt(count) ,totalPrice, {from: account, value: totalPrice, gas:gas},function(err,result){
          if (!err) {
            resolve(result);
          }
          else {
            reject(result);
          }
        });
      });
    });
  },

  //---------------------------玩法二 购买球队-------------------
      buyTeamTwo:function(event) {
        event.preventDefault();

        var teamid =  document.getElementById("buytwoteam_id").value;
        var zhushu =  document.getElementById("buytwoteam_number").value;
        var gameid =  document.getElementById("buytwoteam_ccid").value;
        var price =  document.getElementById("buytwoteam_price").value;
        var  cash = web3.toWei(parseFloat(price) * parseInt(zhushu));
        App.buyTeamTwoFun(teamid,gameid,num,cash).then(function(result){
          console.log(result);
        }).catch(function(err){
          console.log(err);
        });
      },

      buyTeamTwoFun:function(index,gameid,num,price)
      {
        return new Promise((resolve,reject)=>{
        web3.eth.getAccounts(function(error, accounts) {
          if (error) {
            console.log(error);
          }
          var account = accounts[0];
          num =  parseInt(num);
          var initPrice = web3.toWei(price *num)
          //加上5%的手续费
          var total =  initPrice * 0.05 + initPrice *1 ;
          var price_to = web3.toWei(price);
          App.contracts.TutorialToken.buyTwo(parseInt(index), parseInt(gameid), num,price_to,{from: account, value:total , gas:gas},function(err,result){
            if (!err) {
              resolve(result);
            }
            else {
              reject(err);
            }
          });
        });
      });
    },


//------------------------玩法一购买记录----------------------
  getTraddingOne: function(event) {
    event.preventDefault();
    var address = document.getElementById("gettraddingOne_address").value;
    var begin = document.getElementById("gettraddingOne_begin").value;
    var end = document.getElementById("gettraddingOne_latest").value;
     App.getTraddingOneFun(address,begin,end,function(err,result){
       if(!err)
       {
         console.log(result);
       }else {
         console.log(err.message);
       }
    });
  },

  getTraddingOneFun:function (address,start,end) {
    return new Promise((resolve,reject)=>{
          var adr = {};
          //目前只支持地址搜索
          if (address.length >0) {
            adr = {buyer:address};
          }
          // 获取事件对象
        let listData  = new Array();
        var myEventBouns = App.contracts.TutorialToken.BuyWinner(adr, {fromBlock: start, toBlock: end, gas:gas});//{curOwner: App.loginaccount}, 'latest'
        myEventBouns.watch(function(err, result) {
          if (!err) {
              let info =  result['args'];
              listData.push(info);
              resolve(listData);
          } else {
              reject(err);
          }
        });
    });
  },



//------------------------玩法二购买记录----------------------
    getTraddingTwo: function(event) {
      event.preventDefault();
      var address = document.getElementById("gettraddingTwo_address").value;
      var begin = document.getElementById("gettraddingTwo_begin").value;
      var end = document.getElementById("gettraddingTwo_latest").value;
      App.getTraddingTwoFun(address,begin,end,function(err,result){
        if(!err)
        {
          console.log(result);
        }else {
          console.log(err.message);
        }
    })
  },

    getTraddingTwoFun:function(address,start,end)
    {
      return new Promise((resolve,reject)=>{
        var adr = {};
        //目前只支持地址搜索
        if (address.length >0) {
          adr = {buyer:address};
        }
        // 获取事件对象
        let listData  = new Array();
        var myEventBouns = App.contracts.TutorialToken.BuyWinnerTwo(adr, {fromBlock: start, toBlock: end});//{curOwner: App.loginaccount}, 'latest'
        myEventBouns.watch(function(err, result) {
          if (!err) {
            let info =  result['args'];
            listData.push(info)
            resolve(listData);
          } else {
              reject(err);
          }
        });
      });
    },




    //------------------------奖金池分配记录----------------------
      ShareBonus: function(event) {
        event.preventDefault();
        //调用拉取
        App.ShareBonusFun('',0,'latest',function(err,result){
          if(!err)
          {
            console.log(result);
          }else {
            console.log(err.message);
          }
       });
      },

      ShareBonusFun:function(address,start,end)
      {
        return new Promise((resolve,reject)=>{
          var adr = {};
          //目前只支持地址搜索
          if (address.length >0) {
            adr = {buyer:address};
          }
              // end 如果是 'latest' 查询全部
          let shareList = new Array();
          var myEventBouns = App.contracts.TutorialToken.ShareBonus(adr, {fromBlock: start, toBlock: end});//{curOwner: App.loginaccount}, 'latest'
          myEventBouns.watch(function(err, result) {
            if (!err) {
            let info =  result['args'];
              shareList.push(info);
              resolve(shareList);
            } else {
              reject(err);
            }
          });
        });
      },


      getWinnersOne:function(event)
      {
        event.preventDefault();
        //名次数据存储起来
        let winnerTeam = document.getElementById("playOneTeamNum").value;
        //存储到本地
        localStorage.setItem("teamid",winnerTeam);
        // console.log(localStorage.getItem("teamid"));
        App.getWinnersOneFun({}).then(function(result)
      {
        //解析数据 teameids[0],teameids[1],teameids[2]
        App.analyticalData(result,1);
        console.log(result);
      }).catch(function(err){
        console.log(err.message);
      });
      },

//-------------------------查询玩法一中奖用户--------------------
    getWinnersOneFun:function(param)
    {
      return new Promise((resolve,reject)=>{
            // 获取事件对象 first  second third
        let winnerList = new Array();
        var myEventBouns = App.contracts.TutorialToken.BuyWinnerList(param, {fromBlock:0, toBlock:'latest'});//{curOwner: App.loginaccount}, 'latest'
        myEventBouns.watch(function(err, result) {
          if (!err) {
            let info = result['args'];
            winnerList.push(info);
            resolve(winnerList);
          } else {
              reject(err);
          }
        });
    });
    },

    getWinnersTwo:function(event)
        {
          event.preventDefault();
          var teameid = document.getElementById("playTwoUser_txt").value;
          var gameid = document.getElementById("playTwoUsertNumber_txt").value;
          App.getWinnersTwoFun(gameid,teameid,function(err,result){
            if (!err) {
              //解析数据
              App.analyticalData(result,2);
            }else {
              console.log(err.message);
            }
          });
        },

//-----------------玩法二查询某场中奖者---------
    getWinnersTwoFun:function(gameId,teameId)
  {
      return new Promise((resolve,reject)=>{
        var adr = {gameid:gameId,first:teameId};
        var winnerList = new Array();
    		var myEventBouns = App.contracts.TutorialToken.BuyWinnerTwo(adr, {fromBlock:0, toBlock:'latest'});//{curOwner: App.loginaccount}, 'latest'
    		myEventBouns.watch(function(err, result) {
    			if (!err) {
            let arryinfo = result['args'];
            winnerList.push(arryinfo);
            resolve(winnerList);
    			} else {
            reject(err);
    			}
        });
      });
  },

// 分享奖金方法
    SharesAmountFun:function(winers,amounts,gameId,type,total)
    {
      return new Promise ((resolve,reject)=>{
        web3.eth.getAccounts(function(error, accounts) {
          var account = accounts[0];
        App.contracts.TutorialToken.batchShareAmount(winers,amounts,gameId,type,total,{from: account, gas:gas},function(err,result){
          if(!err)
          {
            resolve(result);
          }else {
            reject(err);
          }
        })
      })
    });},

//-------------------玩法一分享奖金-------------------
    calculatePriceOne:function(data)
    {
        //玩法类型
        let type = data[0]["buyType"].toNumber();
        //场次id
        let gameid = data[0]["gameid"].toNumber();
        //中奖用户
        let WinnerUsers = new Array();

        //第一名中奖总注数
        let firstTotalCount = 0;
        //第二名中奖总注数
        let secondTotalCount = 0;
        //第三名中奖总注数
        let thirdTotalCount = 0;

        //获得本场比赛所有奖金
        App.getListTeamByIdFun(gameid,function(err,result){
          if(!err)
          {
            //本场比赛总金额
            let total = result[0].toNumber() ;
            // 5%的手续费
            let lastToal = total -  (total *0.05);
            //第一名分配金额
            let totalFirst = lastToal *0.6;
            //第二名分配金额
            let totalSecond = lastToal *0.3;
            //第三名分配金额
            let totalThird = lastToal *0.1;
            //获得前三名id
            let winnerList = localStorage.getItem("teamid").split(',');
            //循环解析数据
            for (var i = 0; i < data.length; i++) {
              let info =  data[i];
              //用户地址
              let address = info["buyer"];
              //用户购买注数
              let count = info["buyTotal"].toNumber();

              //当前用户是第几名
              let first = info["first"].toString();
              let second =info["second"].toString();
              let third =info["third"].toString();
              //一等奖用户 全中
              if (first == winnerList[0] && second == winnerList[1] && third == winnerList[2] ) {
                firstTotalCount += count;
                //存储一等奖地址
                WinnerUsers.push({adr:address,num:count,ranking:1});

              //二等奖 01 02 12 三中二
              }else if ((first == winnerList[0] && second == winnerList[1]) || (first == winnerList[0] && third == winnerList[2]) || (second == winnerList[1] && third == winnerList[2])) {
              secondTotalCount += count;
              //存储二等奖地址
                WinnerUsers.push({adr:address,num:count,ranking:2});

              //三等奖 三中一
              }else if (first == winnerList[0] || second == winnerList[1] ||  third == winnerList[2]) {
                thirdTotalCount += count;
                //存储二等奖地址
                WinnerUsers.push({adr:address,num:count,ranking:3});
              }
            }

            //第一名每注奖金
            let firstSign =  totalFirst /  firstTotalCount;
            //第二名每注奖金
            let secondSign = totalSecond /  secondTotalCount;
            //第三名每注奖金
            let thirdSign = totalThird /  thirdTotalCount;

            let  userAddress = new Array();
            let  userPrice = new Array();
            //拼装分享数据
            for (var i = 0; i < WinnerUsers.length; i++) {
              let infoWinner =  WinnerUsers[i];
              //中奖名次 1 2 3
              let  ranking = infoWinner['ranking'];
              //购买的注数
              let  num = infoWinner['num'];
              //存储地址
              userAddress.push(infoWinner['adr']);
              //中奖名次
              if (ranking == '1') {
                userPrice.push(firstSign * num);
              }else if (ranking == '2') {
                userPrice.push(secondSign * num);
              }
              else {
                userPrice.push(thirdSign * num);
              }
            }
            //分配奖金
             App.SharesAmountFun(userAddress,userPrice,gameid,type,lastToal,function(err,result){
               if(!err)
               {
                 //分完奖金结束本场比赛
                 App.stopGameFun(gameid);
               }
               else {
                 console.log(err.message);
               }
             });
          }
          else
          {
            console.log(err.message);
          }
        })
      },

//--------------------玩法二分享奖金------------------
    calculatePriceTwo:function(data)
      {
        //用户地址
         let arryAddress = new Array();
         //用户购买注数
         let arrycounts= new Array();

         //玩法类型
         let type = data[0]["buyType"].toNumber();
         //场次id
         let gameid = data[0]["gameid"].toNumber();

         for (var i = 0; i < data.length; i++) {
           let info = data[i];
           //用户地址
           let address = info["buyer"];
           arryAddress.push(address);

           //用户购买注数
           let count = info["buyTotal"].toNumber() ;
           arrycounts.push(count);
         }

        //根据gameid获得本场比赛奖金总额
        App.getListTeamByIdFun(gameid,function(err,result){
          if (!err) {
            //本场比赛总金额
            let total = result[0].toNumber();
            //总购买注数
            let totalAmounts = 0;
            //每一注的金额
            let singlePrice = 0;
            //中奖用户所得奖金
            let userPrice = new Array();


            //总注数累加
            for (var i = 0; i < arrycounts.length; i++) {
             totalAmounts += arrycounts[i];
            }
            //提取5%的手续费
            let last_taotal = total - (total * 0.05);
            //计算每注多少金额
            singlePrice = last_taotal / totalAmounts;

            //计算每个用户所得奖金
            for (var i = 0; i < arrycounts.length; i++) {
              let singe =  arrycounts[i];
               userPrice.push(singe *singlePrice);
            }
            //分配奖金
             App.SharesAmountFun(arryAddress,userPrice,gameid,type,last_taotal,function(err,result){
               if (!err)
               {
                 //分完奖金结束本场比赛
                 App.stopGameFun(gameid);
               }
               else
               {
                 console.log(err.message);
               }
             });
          }
          else
          {
            console.log(err.message);
          }
        });
      },

//--------------------解析中奖者数据--------------------
    analyticalData:function(data,type){
      //玩法一计算
      if (type == 1) {
        App.calculatePriceOne(data);
      }
      //玩法二计算
      else{
        App.calculatePriceTwo(data);
      }
    },

//----------结束某场比赛----------
    stopGame:function(event)
    {
      event.preventDefault();
      var gameId = document.getElementById("stopGame_txt").value;
      App.stopGameFun(gameId,function(err,result){
        if (!err) {
          console.log(result);
        }else {
          console.log(err.message);
        }
    },

//----------------------结束比赛场次---------
    stopGameFun:function(gameid)
   {
      return new Promise((resolve,reject)=> {
        web3.eth.getAccounts(function(error, accounts) {
        var account = accounts[0];
        App.contracts.TutorialToken.setTeamStatus(false,gameid,{from: account, gas:gas},function(err,result){
            if (!err) {
              resolve(result);
            }
            else {
              reject(err);
            }
          });
        });
      });
    }

};
$(function() {
    App.init();
});
