var result = [];

// ページ内のすべてのリンクを取得

function createJsCssTag() {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '#c-1 {\n' +
        ' background: #e85555;\n' +
        '}\n' +
        '\n' +
        '.nav-danger {\n' +
        ' background: #e85555 !important;\n' +
        ' border: 1px solid #e85555 !important;\n' +
        '}\n' +
        '\n' +
        '.nav-warning {\n' +
        ' background: #d7aa57 !important;\n' +
        ' border: 1px solid #d7aa57 !important;\n' +
        '}\n' +
        '\n' +
        '.nav-safe {\n' +
        ' background: #62b665 !important;\n' +
        ' border: 1px solid #62b665 !important;\n' +
        '}\n' +
        '\n' +
        '.badge::after {\n' +
        ' content: ""\n' +
        ' position: absolute;\n' +
        ' background: #f81000;\n' +
        ' height: 5px;\n' +
        ' width: 5px;\n' +
        ' top: 1px;\n' +
        ' left: 2px;\n' +
        ' text-align: center;\n' +
        ' border-radius: 50%;\n' +
        ' padding: 1px;\n' +
        ' border: 1.2px solid #fffefe;\n' +
        '}\n' +
        '\n' +
        '.sidenav {\n' +
        ' height: 90vh;\n' +
        ' width: 0;\n' +
        ' position: absolute;\n' +
        ' z-index: 1;\n' +
        ' top: 0;\n' +
        ' right: 0;\n' +
        ' background-color: #cacaca;\n' +
        ' transition: 0.5s;\n' +
        ' padding-top: 60px;\n' +
        ' overflow: auto;\n' +
        ' border-radius: 8px;\n' +
        '}\n' +
        '\n' +
        '.sidenav .q {\n' +
        ' padding: 8px 8px 8px 8px;\n' +
        ' text-decoration: none;\n' +
        ' /* font-size: 25px; */\n' +
        ' font-weight: 600;\n' +
        ' color: #252121;\n' +
        ' display: block;\n' +
        ' transition: 0.3s;\n' +
        '}\n' +
        '\n' +
        '/*.sidenav .q:hover{*/\n' +
        '/* color: #f1f1f1;*/\n' +
        '/*}*/\n' +
        '\n' +
        '.sidenav .closebtn {\n' +
        ' position: absolute;\n' +
        ' top: 0;\n' +
        ' right: 15px;\n' +
        ' font-size: 36px;\n' +
        ' margin-left: 50px;\n' +
        '}\n' +
        '\n' +
        '.sidenav-danger {\n' +
        ' position: relative;\n' +
        ' padding: 0.1em 0.5em;\n' +
        ' border-left: solid 6px #e85555;\n' +
        ' border-bottom: solid 2px #e85555;\n' +
        ' background: #f1cdcd;\n' +
        ' border-radius: 5px;\n' +
        '}\n' +
        '\n' +
        '.sidenav-warning {\n' +
        ' position: relative;\n' +
        ' padding: 0.1em 0.5em;\n' +
        ' border-left: solid 6px #d7aa57;\n' +
        ' border-bottom: solid 2px #d7aa57;\n' +
        ' background: #e2d4bf;\n' +
        ' border-radius: 5px;\n' +
        '}\n' +
        '\n' +
        '.sidenav-success {\n' +
        ' position: relative;\n' +
        ' padding: 0.1em 0.5em;\n' +
        ' border-left: solid 6px #62b665;\n' +
        ' border-bottom: solid 2px #62b665;\n' +
        ' background: #cce6cf;\n' +
        ' border-radius: 5px;\n' +
        '}\n' +
        '\n' +
        '.sidenav-other {\n' +
        ' position: relative;\n' +
        ' padding: 0.1em 0.5em;\n' +
        ' border-left: solid 6px #777777;\n' +
        ' border-bottom: solid 2px #777777;\n' +
        ' background: #dad6d6;\n' +
        ' border-radius: 5px;\n' +
        '}\n' +
        '\n' +
        '.sidenav-list {\n' +
        ' padding: 20px 8px 8px 8px;\n' +
        ' text-decoration: none;\n' +
        ' color: #818181;\n' +
        ' display: block;\n' +
        '}\n' +
        '\n' +
        '\n' +
        '.sidenav-list .lecture-danger {\n' +
        ' font-size: 12px;\n' +
        ' font-weight: 400 !important;\n' +
        ' color: #f7f7f7;\n' +
        ' width: fit-content;\n' +
        ' padding: 3px 10px;\n' +
        ' margin: 0px;\n' +
        ' margin-top: -12px;\n' +
        ' margin-left: -5px;\n' +
        ' background: #e85555;\n' +
        ' border-radius: 20px 20px 20px 20px;\n' +
        '}\n' +
        '\n' +
        '.sidenav-list .lecture-warning {\n' +
        ' font-size: 12px;\n' +
        ' font-weight: 400 !important;\n' +
        ' color: #f7f7f7;\n' +
        ' width: fit-content;\n' +
        ' padding: 3px 10px;\n' +
        ' margin: 0px;\n' +
        ' margin-top: -12px;\n' +
        ' margin-left: -5px;\n' +
        ' background: #d7aa57;\n' +
        ' border-radius: 20px 20px 20px 20px;\n' +
        '}\n' +
        '\n' +
        '.sidenav-list .lecture-success {\n' +
        ' font-size: 12px;\n' +
        ' font-weight: 400 !important;\n' +
        ' color: #f7f7f7;\n' +
        ' width: fit-content;\n' +
        ' padding: 3px 10px;\n' +
        ' margin: 0px;\n' +
        ' margin-top: -12px;\n' +
        ' margin-left: -5px;\n' +
        ' background: #62b665;\n' +
        ' border-radius: 20px 20px 20px 20px;\n' +
        '}\n' +
        '\n' +
        '.sidenav-list .lecture-other {\n' +
        ' font-size: 12px;\n' +
        ' font-weight: 400 !important;\n' +
        ' color: #f7f7f7;\n' +
        ' width: fit-content;\n' +
        ' padding: 3px 10px;\n' +
        ' margin: 0px;\n' +
        ' margin-top: -12px;\n' +
        ' margin-left: -5px;\n' +
        ' background: #777777;\n' +
        ' border-radius: 20px 20px 20px 20px;\n' +
        '}\n' +
        '\n' +
        '.sidenav-list p {\n' +
        ' list-style-type: initial;\n' +
        ' font-size: 14px;\n' +
        ' padding-left: 10px;\n' +
        ' margin: 5px;\n' +
        '}\n' +
        '\n' +
        '.sidenav-list .kadai-date {\n' +
        ' display: inline-block;\n' +
        '}\n' +
        '\n' +
        '.kadai-danger {\n' +
        ' border-top: solid 2px #e85555;\n' +
        ' border-left: solid 2px #e85555;\n' +
        ' border-bottom: solid 2px #e85555;\n' +
        ' border-right: solid 2px #e85555;\n' +
        ' border-radius: 10px 10px 10px 10px;\n' +
        ' margin-bottom: 20px;\n' +
        '}\n' +
        '\n' +
        '.kadai-warning {\n' +
        ' border-top: solid 2px #d7aa57;\n' +
        ' border-left: solid 2px #d7aa57;\n' +
        ' border-bottom: solid 2px #d7aa57;\n' +
        ' border-right: solid 2px #d7aa57;\n' +
        ' border-radius: 10px 10px 10px 10px;\n' +
        ' margin-bottom: 20px;\n' +
        '}\n' +
        '\n' +
        '.kadai-success {\n' +
        ' border-top: solid 2px #62b665;\n' +
        ' border-left: solid 2px #62b665;\n' +
        ' border-bottom: solid 2px #62b665;\n' +
        ' border-right: solid 2px #62b665;\n' +
        ' border-radius: 10px 10px 10px 10px;\n' +
        ' margin-bottom: 20px;\n' +
        '}\n' +
        '\n' +
        '.kadai-other {\n' +
        ' border-top: solid 2px #777777;\n' +
        ' border-left: solid 2px #777777;\n' +
        ' border-bottom: solid 2px #777777;\n' +
        ' border-right: solid 2px #777777;\n' +
        ' border-radius: 10px 10px 10px 10px;\n' +
        ' margin-bottom: 20px;\n' +
        '}\n' +
        '\n' +
        '.kadai-date {\n' +
        ' font-size: 12px !important;\n' +
        ' font-weight: bold;\n' +
        ' color: #b01011\n' +
        '}\n' +
        '\n' +
        '.kadai-title {\n' +
        ' font-size: 12px !important;\n' +
        ' color: #524e4e;\n' +
        '}\n' +
        '\n' +
        '#hamburger {\n' +
        ' font-size: 30px;\n' +
        ' cursor: pointer;\n' +
        ' position: absolute;\n' +
        ' right: 10px;\n' +
        ' bottom: -5px;\n' +
        '}\n' +
        '\n' +
        '.logo {\n' +
        ' position: absolute;\n' +
        ' top: 7px;\n' +
        ' left: 2px;\n' +
        ' height: 40px;\n' +
        '}\n' +
        '\n' +
        '.time-remain {\n' +
        ' font-weight: bold;\n' +
        ' font-size: 12px;\n' +
        '}\n' +
        '#cover{\n' +
        ' width: 100%;\n' +
        ' height: 100%;\n' +
        ' position: fixed;\n' +
        ' top: 0;\n' +
        ' left: 0;\n' +
        ' opacity: 0;\n' +
        '}';
    document.body.appendChild(style);
    var js = document.createElement('script')
    js.setAttribute("type", "text/javascript")
    js.setAttribute("src", 'https://code.jquery.com/jquery-3.2.1.min.js')
    document.body.appendChild(js);
}

function insertJS() {
    let js = document.createElement('script');
    js.textContent = "let btn = document.getElementById('close_btn');\n" +
        "btn.onclick = toggleNav;\n" +
        "let ham = document.getElementById('hamburger');\n" +
        "ham.onclick = toggleNav;\n" +
        "\n" +
        "let toggle = false;\n" +
        "function toggleNav() {\n" +
        " if (toggle) {\n" +
        " document.getElementById(\"mySidenav\").style.width = \"0\"\n" +
        " document.getElementById(\"cover\").remove();\n" +
        " } else {\n" +
        " document.getElementById(\"mySidenav\").style.width = \"300px\"\n" +
        " let cover = document.createElement(\"div\");\n" +
        " cover.id=\"cover\"\n" +
        " document.getElementsByTagName(\"body\")[0].appendChild(cover);\n" +
        " cover.onclick = toggleNav;\n" +
        " }\n" +
        " toggle = 1 - toggle;\n" +
        "}"
    try {
        document.head.appendChild(js);
    } catch (e) {
        console.log("error");
    }

}

function parseID(lectureIDList) {
    let idList = {};
    for (let i = 0; i < lectureIDList.length; i++) {
        let id = lectureIDList[i].lectureID;
        idList[id] = lectureIDList[i].lectureName;
    }
// console.log(idList);
    return idList;
}

function sortKadai(parsedKadai) {
// console.log("s", parsedKadai.length);
    for (let i = 0; i < parsedKadai.length; i++) {
        let kadaiList = parsedKadai[i].kadaiList;
        kadaiList.sort(function (a, b) {
            if (a.dueTimeStamp < b.dueTimeStamp) return -1;
            if (a.dueTimeStamp > b.dueTimeStamp) return 1;
            if (a.kadaiTitle < b.kadaiTitle) return -1;
            if (a.kadaiTitle > b.kadaiTitle) return 1;
            return 0;
        });
// console.log(i, kadaiList);
        parsedKadai[i].kadaiList = kadaiList;
    }
    return parsedKadai;
}

function getTimeRemain(_remainTime) {
    let day = Math.floor(_remainTime / (3600 * 24));
    let hours = Math.floor((_remainTime - (day * 3600 * 24)) / 3600);
    let minutes = Math.floor((_remainTime - (day * 3600 * 24 + hours * 3600)) / 60);

    return [day, hours, minutes]

}

function insertSideNav(parsedKadai, lectureIDList) {
    let idList = parseID(lectureIDList);
    parsedKadai = sortKadai(parsedKadai);

    let topbar = document.getElementById("mastHead");
    let hamburger = document.createElement('span');
    hamburger.id = "hamburger"
    hamburger.textContent = "☰"
    try {
        topbar.appendChild(hamburger);
    } catch (e) {
        console.log("error")
    }


    var parent = document.getElementById('container');
    var ref = document.getElementById('toolMenuWrap');
    var main_div = document.createElement('div');
    main_div.className = "sidenav"
    main_div.id = "mySidenav"

    var img = "https://raw.githubusercontent.com/das08/comfortable-panda/master/img/logo.png"
    let logo = document.createElement("img");
    logo.className = "logo"
    logo.alt = "logo"
    logo.src = img;

    var a = document.createElement('a');
    a.href = '#';
    a.id = "close_btn"
    a.classList.add("closebtn");
    a.classList.add("q");
    a.textContent = "×"

    let header_list = ["締め切り２４時間以内", "締め切り５日以内", "締め切り１４日以内", "その他"];
    let header_color = ["danger", "warning", "success", "other"];

    var header = document.createElement('div');
    var header_title = document.createElement('span');
    header_title.className = "q"
    var list_container = document.createElement('div');
    list_container.className = "sidenav-list"
    var list_body = document.createElement('div');
    var h2 = document.createElement('h2');

    var p_date = document.createElement('p');
    p_date.className = "kadai-date"
    var remain = document.createElement('span');
    remain.className = "time-remain"
// p_date.textContent="2020/06/02 23:55"
    var p_title = document.createElement('p');
    p_title.className = "kadai-title"
// p_title.textContent="総合課題"

    main_div.appendChild(logo);
    main_div.appendChild(a);


    for (let i = 0; i < 4; i++) {
        let item_cnt = 0;
// header begin //
        var C_header = header.cloneNode(true);
        var C_header_title = header_title.cloneNode(true);
        C_header.className = `sidenav-${header_color[i]}`;
        C_header_title.textContent = `${header_list[i]}`;
// header end //

// list begin //
        var C_list_container = list_container.cloneNode(true);
        for (let item = 0; item < parsedKadai.length; item++) {
            let kadaiList = parsedKadai[item].kadaiList;
            let lectureID = parsedKadai[item].lectureID;

            var C_list_body = list_body.cloneNode(true);
            C_list_body.className = `kadai-${header_color[i]}`;

            let lectureName = idList[lectureID];
            if (lectureName === undefined) lectureName = "不明"

            var C_h2 = h2.cloneNode(true);
            C_h2.className = `lecture-${header_color[i]}`;
            C_h2.textContent = "" + lectureName;
            C_list_body.appendChild(C_h2);

            let cnt = 0;
            for (let id = 0; id < kadaiList.length; id++) {
                let date = p_date.cloneNode(true);
                let remain_time = remain.cloneNode(true);
                let title = p_title.cloneNode(true);

                let dueTime = kadaiList[id].dueTimeStamp;
                let _date = new Date(dueTime);
                let kadaiTitle = kadaiList[id].kadaiTitle;
                let dispDue = _date.toLocaleDateString() + " " + _date.getHours() + ":" + ('00' + _date.getMinutes()).slice(-2);
                let timeRemain = getTimeRemain((dueTime - new Date().getTime()) / 1000);

                let daysUntilDue = diffDays(new Date().getTime(), dueTime);
                if ((daysUntilDue <= 1 && i === 0) || (daysUntilDue > 1 && daysUntilDue <= 5 && i === 1) || (daysUntilDue > 5 && daysUntilDue <= 14 && i === 2) || (daysUntilDue > 14 && i === 3)) {
                    date.textContent = "" + dispDue;
                    remain_time.textContent = `あと${timeRemain[0]}日${timeRemain[1]}時間${timeRemain[2]}分`;
                    title.textContent = "" + kadaiTitle;
                    C_list_body.appendChild(date);
                    C_list_body.appendChild(remain_time);
                    C_list_body.appendChild(title);
                    cnt++;
                }
            }
            if (cnt > 0) {
                C_list_container.appendChild(C_list_body);
                C_header.appendChild(C_header_title);
                item_cnt++;
            }
        }
// list end //


        if (item_cnt > 0) {
            main_div.appendChild(C_header);
            main_div.appendChild(C_list_container);
        }


    }
    try {
        parent.insertBefore(main_div, ref);
    } catch (e) {
        console.log("error");
    }
}

const defaultTab = document.querySelectorAll('.nav-menu');
const defaultTabCount = Object.keys(defaultTab).length;
const otherSiteTab = document.querySelectorAll('#otherSiteList > li');
const otherSiteTabCount = Object.keys(otherSiteTab).length;

function diffDays(dt1, dt2) {

    let diff = (dt2 - dt1) / 1000;
    diff /= 3600 * 24;
    if (diff < 0) diff = 9999;
    return (diff);

}

function addNotificationBadge(lectureIDList, upToDateKadaiList) {
    const lectureIDCount = lectureIDList.length;

//タブにある全科目を回す。
    for (let i = 0; i < lectureIDCount; i++) {
// default Tab
        if (lectureIDList[i].type === 'default') {
            for (let j = 2; j < defaultTabCount; j++) {
// let lectureID = defaultTab[j].getElementsByTagName('a')[0].getAttribute('href').slice(-17);
                let lectureID = defaultTab[j].getElementsByTagName('span')[1].getAttribute('data');
                const q = upToDateKadaiList.findIndex((kadai) => {
                    return (kadai.lectureID === lectureID);
                });
                if (q !== -1) {
                    let daysUntilDue = diffDays(new Date().getTime(), upToDateKadaiList[q].closestTime);
                    if (daysUntilDue <= 1) {
                        defaultTab[j].classList.add('nav-danger');
                    } else if (daysUntilDue <= 5) {
                        defaultTab[j].classList.add('nav-warning');
                    } else if (daysUntilDue <= 14) {
                        defaultTab[j].classList.add('nav-safe');
                    }
                }
            }
        }
// otherSite Tab
        else if (lectureIDList[i].type === 'otherSite') {
            for (let j = 0; j < otherSiteTabCount; j++) {
                let lectureID = otherSiteTab[j].getElementsByTagName('a')[0].getAttribute('href').slice(-17);
                const q = upToDateKadaiList.findIndex((kadai) => {
                    return (kadai.lectureID === lectureID);
                });
                if (q !== -1) {
                    let daysUntilDue = diffDays(new Date().getTime(), upToDateKadaiList[q].closestTime);
                    if (daysUntilDue <= 1) {
                        otherSiteTab[j].classList.add('nav-danger');
                    } else if (daysUntilDue <= 5) {
                        otherSiteTab[j].classList.add('nav-warning');
                    } else if (daysUntilDue <= 14) {
                        otherSiteTab[j].classList.add('nav-safe');
                    }
                }
            }
        }
    }
}

function getTabList() {
    let lectureIDList = [];

    for (let i = 2; i < defaultTabCount; i++) {
        let tmpTab = {};

        let lectureID = defaultTab[i].getElementsByTagName('a')[0].getAttribute('href').slice(-17);
        let lectureID2 = defaultTab[i].getElementsByTagName('span')[1].getAttribute('data');
        let lectureName = defaultTab[i].getElementsByTagName('a')[0].getAttribute('title').split("]")[1];

        tmpTab.type = 'default';
        tmpTab.lectureID = lectureID2;
        tmpTab.lectureName = lectureName;

        lectureIDList.push(tmpTab);

    }
    for (let i = 0; i < otherSiteTabCount; i++) {
        let tmpTab = {};
        let lectureID = otherSiteTab[i].getElementsByTagName('a')[0].getAttribute('href').slice(-17);
        let lectureName = otherSiteTab[i].getElementsByTagName('a')[0].getAttribute('title').split("]")[1];

        tmpTab.type = 'otherSite';
        tmpTab.lectureID = lectureID;
        tmpTab.lectureName = lectureName;

        lectureIDList.push(tmpTab);

    }

    return lectureIDList;
}

function parseKadai(data) {
    let parsedKadai = []
    let item = data.assignment_collection;
    for (let i = 0; i < item.length; i++) {
        let temp = {}
        let lecID = item[i].context;
        let kid = item[i].id;
        let status = item[i].status;
        let title = item[i].title;
        let due = item[i].dueTime.time;
// add only available kadai
        if (due <= new Date().getTime()) {
            continue;
        }
        let kadaiDict = {kid: kid, dueTimeStamp: due, kadaiTitle: title}

// すでに科目がListにあるか見る
        const q = parsedKadai.findIndex((kadai) => {
            return (kadai.lectureID === lecID);
        });
//無ければ新規作成
        if (q === -1) {
            temp.lectureID = lecID;
            temp.closestTime = due;
            temp.farthestTime = due;
            temp.kadaiList = [kadaiDict];
            parsedKadai.push(temp);
        } else {
            temp = parsedKadai[q];
//一番期限がやばい課題のタイムスタンプを記録
            if (temp.closestTime > due) temp.closestTime = due;
            if (temp.farthestTime < due) temp.farthestTime = due;
            temp.kadaiList.push(kadaiDict);
            parsedKadai[q] = temp;
        }


    }
    console.log(parsedKadai);
    return parsedKadai;
}


function request(url, callback) {

    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {

        if (request.readyState === 4) {

            if (request.status === 200) {
                callback(request.responseText);
                return;
            }
        }

    }

    request.open("GET", url, true);
    request.send();
}

function compare(parsedKadai) {
    let upToDateKadaiList = [];

// 最新の課題を基準に1つずつ見ていく
    for (let i = 0; i < parsedKadai.length; i++) {
        let tmp = {}
        let lectureID = parsedKadai[i].lectureID;
        let closestTime = parsedKadai[i].closestTime;
        let farthestTime = parsedKadai[i].farthestTime;
        tmp.lectureID = lectureID;
        tmp.isUpdate = 1;
        tmp.closestTime = closestTime;
        tmp.farthestTime = farthestTime;
        upToDateKadaiList.push(tmp);
    }
    return upToDateKadaiList;
}

function display() {
    request("https://panda.ecs.kyoto-u.ac.jp/direct/assignment/my.json", function (text) {

        const json = JSON.parse(text);
        let parsedKadai = parseKadai(json);
        let tabList = getTabList();
        let upToDateKadaiList = compare(parsedKadai);
        insertSideNav(parsedKadai, tabList);
        insertJS();

        addNotificationBadge(tabList, upToDateKadaiList);
        console.log('fin!');

    });

}

function main() {
    createJsCssTag();
    var js = document.createElement('script');
    js.setAttribute("type", "text/javascript");
    js.setAttribute("src", 'https://code.jquery.com/jquery-3.2.1.min.js');

    js.onload = function () {
        display();
    };
    document.body.appendChild(js);
}

main();


// completionを呼び出して終了
completion(result);