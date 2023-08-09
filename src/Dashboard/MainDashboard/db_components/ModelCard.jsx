import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { GrStar } from "react-icons/gr";
import { IoHeartCircle, IoHeartCircleOutline } from "react-icons/io5";
import { Context } from "../../../Context/context";

const ModelCard = ({ props }) => {
  const { userInfo, setUserInfo } = useContext(Context);
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const FavModel = async (modelId, status) => {
    try {
      console.log(modelId, status);
      const { data } = await axios.post(
        `${BASE_URL}/api/favModel/${modelId}`,
        {
          userId: userInfo._id,
          status: status,
        },
        {
          headers: {
            token: userInfo.token,
          },
        }
      );
      if (data) {
        // console.log(data, "fuiejhfoiehfoiehfoiehiofh");
        // setRefreshModel(!refreshModel);
        setUserInfo(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(userInfo);
  return (
    <div className="w-full cursor-pointer p-3 bg-light-grey rounded-2xl flex flex-wrap sm:grid grid-cols-2 relative">
      <span className="absolute top-1 right-1 flex items-center text-bright-orange text-2xl cursor-pointer">
        {userInfo.favouriteModels.includes(props._id) ? (
          <IoHeartCircle onClick={() => FavModel(props._id, false)} />
        ) : (
          <IoHeartCircleOutline onClick={() => FavModel(props._id, true)} />
        )}
      </span>
      <div className="w-2/5 sm:w-full">
        <img
          src={props.images[0]}
          alt="travel-card"
          className="w-full object-cover h-full aspect-11/10 rounded-2xl"
        />
      </div>
      <div className="w-3/5 sm:w-full px-4 grid content-between relative gap-2">
        <div className="flex items-center gap-1 text-xs">
          <p className="flex items-center gap-1">
            <span className="flex text-light-yellow">
              <GrStar />
            </span>
          </p>
          <p className="text-[10px] font-medium text-bright-orange">
            {props.firstName}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-xs gap-1 flex items-center">
            <span className="text-bright-orange">52</span>
            {/* <span className="w-[1px] h-3 bg-white block"></span>
            <span>53</span> */}
          </div>
          <div className="flex flex-wrap gap-1">
            <span className="w-4 h-4 flex items-center justify-center rounded-full bg-white p-1">
              <img
                src="images/desk_icon.png"
                alt="desk_icon"
                className="max-w-full"
              />
            </span>
            <span className="w-4 h-4 flex items-center justify-center rounded-full bg-white p-1">
              <img
                src="images/mob_icon.png"
                alt="mob_icon"
                className="max-w-full"
              />
            </span>
            <span className="w-4 h-4 flex items-center justify-center rounded-full bg-white p-1">
              <img
                src="images/cal_icon.png"
                alt="cal_icon"
                className="max-w-full"
              />
            </span>
          </div>
        </div>
        {/* <div className="flex items-center text-xl">
          <span className="flex items-center text-bright-orange">
            <BiFemale />
          </span>
          <span className="flex items-center text-[#FF0000]">
            <BiFemale />
          </span>
          <span className="flex items-center text-[#FF4B26]">
            <BiFemale />
          </span>
          <span className="flex items-center text-[#167EE6]">
            <BiFemale />
          </span>
        </div> */}
        <div>
          <p className="text-[10px] flex items-center">
            <span className="inline-flex items-center pr-1">
              <img src="images/loc-icon.png" alt="Location-icon" />
              Delhi, IND
            </span>
            {/* <span className="px-1 inline-block border-l border-white">
              146 min
            </span> */}
          </p>
        </div>
        {/* <div className="flex text-[#FF0000] text-xs flex-wrap gap-1 leading">
          <span>Delhi, IND,</span>
          <span>146 min </span>
          <span>|</span>
          <span>Sep 13 - Sep 17</span>
        </div> */}
        <p className="text-xs font-light">
          We are Travelling to Chandigarh for 3 days 23 June to 25 June .
          interested couple or single Girl are welcome . we have our space
        </p>
      </div>
    </div>
  );
};

export default ModelCard;
