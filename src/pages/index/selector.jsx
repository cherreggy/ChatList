import { View, Text, Image } from "@tarojs/components";
import "../../../font/iconfont.css";
import { useState } from "react";
import Taro from "@tarojs/taro";

export default function EmojiSelecotr(props) {
  const emojis = [
    "https://cdn-icons-png.flaticon.com/128/1791/1791391.png",
    "https://cdn-icons-png.flaticon.com/128/1791/1791429.png",
    "https://cdn-icons-png.flaticon.com/128/1791/1791385.png",
    "https://cdn-icons-png.flaticon.com/128/1791/1791368.png",
    "https://cdn-icons-png.flaticon.com/128/1791/1791451.png",
  ];
  const [on, Seton] = useState(false);

  const handleEmoji = (index) => {
    // console.log(props.data);
    let newData = [...props.data];
    newData[props.ind].emo = index;
    props.setData(newData);
    Taro.setStorageSync("data", newData);
    Seton(false);
  };

  if (on) {
    return (
      <View className="selector">
        {/* <Image
          style="width:1.2rem;height:1.2rem;background: #fff;margin-right:0.5rem;"
          src={emojis[0]}
        /> */}
        {emojis.map((item, index) => (
          <Image
            style="width:1.2rem;height:1.2rem;background: #fff;margin-right:0.5rem;"
            src={emojis[index]}
            key={index}
            onClick={() => {
              handleEmoji(index);
            }}
          />
        ))}
      </View>
    );
  } else {
    return (
      <View className="selector">
        <Image
          style="width:1.2rem;height:1.2rem;background: #fff;"
          src={emojis[props.emo]}
          onClick={() => Seton(true)}
        />
      </View>
    );
  }
}
