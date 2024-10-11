import { nameDate } from "./namedate.js"

Vue.createApp({

})
.component('tab-change',{
    template:`<div class="top">
        <h1>学マス呼称確認ツール</h1>
        <rule-modal />
    <div class="tab">
    
    <button  class="change" v-on:click="onclick('two')">対象指定あり</button>
    <button  class="change" v-on:click="onclick('one')">対象指定なし</button>
    </div>
</div>
    <keep-alive>
      <component v-bind:is="currentTab"></component>
    </keep-alive>`,
    methods:{
        onclick(tab){
            this.components = tab
        }
    },
    computed:{
        currentTab(){
            return 'form-' + this.components
        }
    }
    ,
        data(){
            return{
            components:'two'
            }
        }


})
    .component('form-two', {
        template: `<div class="idol_choice">

            <h3>出典絞り込み</h3>
            <form>
                <select class="data_sort" v-on:change="change" v-model="datasort">
                    <option value="">条件なし</option>
                    <option value="produce">プロデュースコミュ</option>
                    <option value="hatsuboshi">初星コミュ</option>
                    <option value="support">サポートコミュ</option>
                    <option value="event">イベントコミュ</option>
                </select>
            </form>
            <h3>アイドル指定</h3>
            <div class="flexarea">
                <div class="innner_block">
                    <form>
                        <select class="idol_selectA" v-on:change="change" v-model="selectA">
                            <option value=""></option>
                            <option value="saki">花海咲季</option>
                            <option value="temari">月村手毬</option>
                            <option value="kotone">藤田ことね</option>
                            <option value="lilja">葛城リーリヤ</option>
                            <option value="sumika">紫雲清夏</option>
                            <option value="china">倉本千奈</option>
                            <option value="hiro">篠澤広</option>
                            <option value="ume">花海佑芽</option>
                            <option value="mao">有村麻央</option>
                            <option value="rinami">姫崎莉波</option>
                            <option value="misuzu">秦谷美鈴</option>
                            <option value="sena">十王星南</option>
                            <option value="producer">プロデューサー</option>
                        </select>
                    </form>
                </div>
                <div class="innner_block center">
                    <p>から</p>
                </div>
                <div class="innner_block">
                    <form>
                        <select class="idol_selectB" v-on:change="change" v-model="selectB">
                            <option value=""></option>
                            <option value="saki">花海咲季</option>
                            <option value="temari">月村手毬</option>
                            <option value="kotone">藤田ことね</option>
                            <option value="lilja">葛城リーリヤ</option>
                            <option value="sumika">紫雲清夏</option>
                            <option value="china">倉本千奈</option>
                            <option value="hiro">篠澤広</option>
                            <option value="ume">花海佑芽</option>
                            <option value="mao">有村麻央</option>
                            <option value="rinami">姫崎莉波</option>
                            <option value="misuzu">秦谷美鈴</option>
                            <option value="sena">十王星南</option>
                            <option value="producer">プロデューサー</option>
                            <option value="kunio">十王邦夫</option>
                        </select>
                    </form>
                </div>
            </div>
        </div>
        <idol-two />`,
        provide(){
            return{
                list: Vue.computed(()=>this.list)
            }
        },
        computed: {
            change(){
                //選択アイドルの画像を表示させる
                this.idol_img1 = "/img/" +this.selectA + ".jpg"
                this.idol_img2 = "/img/" +this.selectB + ".jpg"
                let dataOut = []

                //プルダウンが両方選択状態かつ、不一致である時のみ実行する
                if(this.selectA != false && this.selectB != false && this.selectA != this.selectB ){
                const select_left = this.selectA
                const select_right = this.selectB
                const check_C = this.datasort

                //インポートしたファイルから、呼ぶ側の名前と一致する配列を取得する
                const name_call = nameDate[select_left]
                

                //呼ぶ側の名前の配列から、呼ぶ先の名前と一致するオブジェクトを取得する
                let name_B = 0

                for (let i = 0; i < name_call.length; i++) {
                    if (Object.hasOwn(name_call[i],select_right)) {
                        name_B = name_call[i]
                    }
                }
                
                //上記で取得したオブジェクトから、呼ぶ先の名前と一致する配列を取得する
                const name_C = name_B[select_right]
                

                const dataAction = name_C.concat()

                //絞り込み条件に応じて内容を変更する
                for (let i =0; i <dataAction.length;i++){
                    //選択内容がなければそのまま
                    if (check_C == false){
                        dataOut = dataAction.concat()
                    } else {
                        //イベント・サポート・初星の場合はfiltが一致するものだけを配列に追加する
                        if (dataAction[i].filt === check_C) {
                            dataOut.push(dataAction[i])
                        }
                    }
                }} else {
                    dataOut = []
                }
                

                this.list = dataOut
            }
    
        },
        data(){
            return {
            selectA: '',
            selectB: '',
            datasort:'',
            idol_img1:'',
            idol_img2:'',
            list:''
            }
        }
    })
    .component('form-one', {
        template: `<div class="idol_choice">

        <h3>出典絞り込み</h3>
            <form>
                <select class="data_sort" v-on:change="change" v-model="datasort">
                    <option value="">条件なし</option>
                    <option value="produce">プロデュースコミュ</option>
                    <option value="hatsuboshi">初星コミュ</option>
                    <option value="support">サポートコミュ</option>
                    <option value="event">イベントコミュ</option>
                </select>
            </form>
            <h3>アイドル指定</h3>
            <div class="flexarea solo">
                <div class="innner_block">
                    <form>
                        <select class="idol_selectA" v-on:change="change" v-model="selectA">
                            <option value=""></option>
                            <option value="saki">花海咲季</option>
                            <option value="temari">月村手毬</option>
                            <option value="kotone">藤田ことね</option>
                            <option value="lilja">葛城リーリヤ</option>
                            <option value="sumika">紫雲清夏</option>
                            <option value="china">倉本千奈</option>
                            <option value="hiro">篠澤広</option>
                            <option value="ume">花海佑芽</option>
                            <option value="mao">有村麻央</option>
                            <option value="rinami">姫崎莉波</option>
                            <option value="misuzu">秦谷美鈴</option>
                            <option value="sena">十王星南</option>
                            <option value="yu">真城優</option>
                            <option value="producer">プロデューサー</option>
                            <option value="asari">根緒亜紗里</option>
                            <option value="kunio">十王邦夫</option>
                            <option value="vitrainer">Viトレーナー
                            </option>
                            <option value="datrainer">Daトレーナー</option>
                            <option value="votrainer">Voトレーナー</option>
                        </select>
                    </form>
                </div>
                
                
            </div>
        </div>
        <idol-one />`,
        provide(){
            return{
                list: Vue.computed(()=>this.list)
            }
        },
        computed: {
            change(){
                //選択アイドルの画像を表示させる
                this.idol_img1 = "/img/" +this.selectA + ".jpg"
                let dataOut = []
    
                //プルダウンが両方選択状態かつ、不一致である時のみ実行する
                if(this.selectA != false){
                const select_left = this.selectA
                const check_C = this.datasort
    
                //インポートしたファイルから、呼ぶ側の名前と一致する配列を取得する
                const name_call = nameDate[select_left]
                
    
    
    
                //呼ぶ側の名前の配列から、各大賞の配列をぜんぶやる
                let allName = []
                for (let i = 0; i < name_call.length; i++) {
                    
                    const nametest = Object.values(name_call[i]).reduce((previous,current)=>{
                        return previous.concat(current)
                    })

                    
                    allName.push(nametest)
                   
                }
                
                //上記で取得したオブジェクトから、呼ぶ先の名前と一致する配列を取得する
                

    
                const dataAction = allName.reduce((previous,current)=>{
                    return previous.concat(current)
                })

               
    
                //絞り込み条件に応じて内容を変更する
                for (let i =0; i <dataAction.length;i++){
                    //選択内容がなければそのまま
                    if (check_C == false){
                        dataOut = dataAction.concat()
                    } else {
                        //イベント・サポート・初星の場合はfiltが一致するものだけを配列に追加する
                        if (dataAction[i].filt === check_C) {
                            dataOut.push(dataAction[i])
                        }
                    }
                    
                }} else {
                    dataOut = []
                }
                
    
                this.list = dataOut
            }
    
        },
        data(){
            return {
            selectA: '',
            datasort:'',
            idol_img1:'',
            list:''
            }
        }
    })
    .component('idol-two',{
        inject:['list'],
        template:`<div class="idol_name">
            <table>
                <tr>
                    <th>呼称</th>
                    <th>出典</th>
                </tr>
                <tr  v-for="item in list">
                    <td>{{item.name}}</td>
                    <td>{{item.data}}</td>
                </tr>
            </table>

        </div>
        `
    })
    .component('idol-one',{
        inject:['list'],
        template:`<div class="idol_name">
            <table>
                <tr>
                    <th>対象</th>
                    <th>呼称</th>
                    <th>出典</th>
                </tr>
                <tr  v-for="item in list">
                    <td>{{item.to}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.data}}</td>
                </tr>
            </table>

        </div>
        `
    })
    .component('rule-modal',{
        template:`
        <button class="menu" v-on:click="modalshow = true">使い方・更新履歴</button>
        <div class="modal_out" v-show="modalshow">
    <div class="modal_in">
        <button v-on:click="modalshow = false"><img src="img/close.png
" class="img"></button>
        <div class="modal_txt">
            <h2>使い方</h2>
            <h3>対象指定あり</h3>
            <p>左側で指定した人物の、右側で指定した人物に対する呼称を出典別に表示します。</p>
            <h3>対象指定なし</h3>
            <p>指定した人物の、他の人物に対する呼称全てを出典別に表示します。</p>
            <h3>出典絞り込み</h3>
            <p>アイドルコミュ・初星コミュ・サポートコミュ・イベントコミュの出典ごとに絞り込んで表示が可能です。</p>
        </div>

        <div class="modal_txt">
            <h2>更新予定</h2>
            <p>サポートコミュからの情報追加<br>
                複数コミュで呼称が共通している場合の表示の簡略化<br>
                情報提供フォームの設置</p>
        </div>

        <div class="modal_txt">
            <h2>問い合わせ</h2>
            <p>管理人のXアカウント（@Riceball_EEC）までお願いします。</p>
        </div>

        <p>※本webサイトはゲーム「学園アイドルマスター」の非公式ファンサイトです。</p>
        
       
        
        
    </div>
</div>`,
        data() {
            return {
                modalshow: true,
            }
        }
    })
    .mount('.app')

    