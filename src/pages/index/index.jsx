import { View, Text, Input, Button, Icon } from "@tarojs/components";
import "./index.scss";
import "../../../font/iconfont.css";
import { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import EmojiSelecotr from "./selector";

export default function Index() {
  const [text, setText] = useState("");
  const [data, setData] = useState([
    { t: "Hello", r: "Hi", emo: 0 },
    { t: "Thank you", r: "Welcome!", emo: 0 },
    { t: "And you?", r: "I'm good!", emo: 0 },
  ]);
  // 新加载时载入数据
  Taro.useLoad(() => {
    // console.log(Taro.getStorageSync("data"));
    setData(Taro.getStorageSync("data") || []);
  }, []);
  // 发送函数
  const onSend = async () => {
    // 通过text获取请求
    if (text != "") {
      const res = await Taro.request({
        url: "http://liulongbin.top:3006/api/robot", //仅为示例，并非真实的接口地址
        data: {
          spoken: text,
        },
        header: {
          "content-type": "application/json", // 默认值
        },
      });
      let tmp = [...data, { t: text, r: res.data.data.info.text, emo: 1 }];
      setData(tmp);
      setText("");

      Taro.setStorageSync("data", tmp);
    }
  };

  const onDelete = (index) => {
    let newList = [...data];
    newList.splice(index, 1);
    setData(newList);
    Taro.setStorageSync("data", newList);
  };

  const utter = ["我很喜欢", "我很伤心", "我很无语", "我很尴尬", "我很难受"];
  // const getReact = async (ind) => {
  //   let str = "";
  //   await Taro.request({
  //     url: "http://liulongbin.top:3006/api/robot", //仅为示例，并非真实的接口地址
  //     data: {
  //       spoken: utter[ind],
  //     },
  //     header: {
  //       "content-type": "application/json", // 默认值
  //     },
  //     success: function (res) {
  //       console.log(res.data.data.info.text);
  //     },
  //   });
  //   return str;
  // };

  // console.log(data);
  var contents = data.map((item, index) => {
    // console.log(item);
    // console.log(getReact());
    return (
      <View key={index} className="list-item">
        {/* 提问内容 */}
        <View>
          <Text>
            <Text className="bold1">我：</Text>
            {item.t}
          </Text>
        </View>
        {/* 回复内容 */}
        <View>
          <Text>
            <Text className="bold2">BOT：</Text>
            {item.r}
          </Text>
        </View>
        {/* 表情选择器 */}
        <EmojiSelecotr
          emo={item.emo}
          data={data}
          setData={setData}
          ind={index}
        ></EmojiSelecotr>
        {/* 删除按钮 */}
        <Button
          onClick={() => {
            onDelete(index);
          }}
          className="delete"
        >
          <Text>删除</Text>
          <Icon
            className="iconfont icon-shanchu"
            style={{
              fontSize: 22,
              verticalAlign: "middle",
              textAlign: "center",
              lineHeight: "2rem",
            }}
          />
        </Button>
        {/* 反应
        <Text>Re:{getReact(item.emo)}</Text> */}
      </View>
    );
  });

  return (
    // 主视图
    <View className="index">
      <View className="head">
        {/* 输入框 */}
        <View className="input">
          <Input
            value={text}
            onInput={(e) => {
              setText(e.currentTarget.value);
            }}
            className="input-content border-box"
          ></Input>
        </View>

        {/* 添加按钮 */}
        <Button onClick={onSend} className="send">
          发送
        </Button>
      </View>

      {/* 主题内容 */}
      <hr
        style={{
          marginTop: "1rem",
          marginBottom: "1rem",
          border: "none",
          backgroundColor: "#eee",
          height: "0.06rem",
        }}
      ></hr>
      <View>{contents}</View>
    </View>
  );
}
