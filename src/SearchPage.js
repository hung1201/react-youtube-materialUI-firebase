import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideosRow from "./VideosRow";
const SearchPage = () => {
  const keyword = useParams();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [keyword]);
  return (
    <>
      {loading ? (
        <div className="searchLoading">
          <h2>Loading...</h2>
        </div>
      ) : (
        <>
          <div className="searchPage">
            <div className="searchPage__filter">
              <TuneOutlinedIcon />
              <h2>FILTER</h2>
            </div>
            <hr />
            <ChannelRow
              image="https://yt3.ggpht.com/ytc/AAUvwniNNRXsKcsAunIOF31uQCGXMaxGrK5m3Kjj_T9cMg=s176-c-k-c0x00ffffff-no-rj-mo"
              channel="Sơn Tùng M-TP Official"
              verified
              subs="9.21 Tr người đăng ký"
              noOfVideos={107}
              description="Son Tung M-TP Official YouTube Channel - Property of Sơn Tùng M-TP..."
            />
            <hr />
            <VideosRow
              views="60 Tr lượt xem"
              subs="9.21 Tr người đăng ký"
              description="MuonRoiMaSaoCon #SonTungMTP #MTP #MTPEntertainment #MTPTalent #MRMSC Available"
              timestamp="1 tuần trước"
              channel="Sơn Tùng M-TP Official"
              title="SƠN TÙNG M-TP | MUỘN RỒI MÀ SAO CÒN | OFFICIAL MUSIC VIDEO"
              image="https://i.ytimg.com/an_webp/xypzmu5mMPY/mqdefault_6s.webp?du=3000&sqp=CNzU7oQG&rs=AOn4CLC5_kGha3rN0luZyVUO7U9frok7Jg"
            />
            <VideosRow
              views="60 Tr lượt xem"
              subs="9.21 Tr người đăng ký"
              description="MuonRoiMaSaoCon #SonTungMTP #MTP #MTPEntertainment #MTPTalent #MRMSC Available"
              timestamp="1 tuần trước"
              channel="Sơn Tùng M-TP Official"
              title="SƠN TÙNG M-TP | MUỘN RỒI MÀ SAO CÒN | OFFICIAL MUSIC VIDEO"
              image="https://i.ytimg.com/an_webp/xypzmu5mMPY/mqdefault_6s.webp?du=3000&sqp=CNzU7oQG&rs=AOn4CLC5_kGha3rN0luZyVUO7U9frok7Jg"
            />
            <VideosRow
              views="60 Tr lượt xem"
              subs="9.21 Tr người đăng ký"
              description="MuonRoiMaSaoCon #SonTungMTP #MTP #MTPEntertainment #MTPTalent #MRMSC Available"
              timestamp="1 tuần trước"
              channel="Sơn Tùng M-TP Official"
              title="SƠN TÙNG M-TP | MUỘN RỒI MÀ SAO CÒN | OFFICIAL MUSIC VIDEO"
              image="https://i.ytimg.com/an_webp/xypzmu5mMPY/mqdefault_6s.webp?du=3000&sqp=CNzU7oQG&rs=AOn4CLC5_kGha3rN0luZyVUO7U9frok7Jg"
            />
            <VideosRow
              views="60 Tr lượt xem"
              subs="9.21 Tr người đăng ký"
              description="MuonRoiMaSaoCon #SonTungMTP #MTP #MTPEntertainment #MTPTalent #MRMSC Available"
              timestamp="1 tuần trước"
              channel="Sơn Tùng M-TP Official"
              title="SƠN TÙNG M-TP | MUỘN RỒI MÀ SAO CÒN | OFFICIAL MUSIC VIDEO"
              image="https://i.ytimg.com/an_webp/xypzmu5mMPY/mqdefault_6s.webp?du=3000&sqp=CNzU7oQG&rs=AOn4CLC5_kGha3rN0luZyVUO7U9frok7Jg"
            />
            <VideosRow
              views="60 Tr lượt xem"
              subs="9.21 Tr người đăng ký"
              description="MuonRoiMaSaoCon #SonTungMTP #MTP #MTPEntertainment #MTPTalent #MRMSC Available"
              timestamp="1 tuần trước"
              channel="Sơn Tùng M-TP Official"
              title="SƠN TÙNG M-TP | MUỘN RỒI MÀ SAO CÒN | OFFICIAL MUSIC VIDEO"
              image="https://i.ytimg.com/an_webp/xypzmu5mMPY/mqdefault_6s.webp?du=3000&sqp=CNzU7oQG&rs=AOn4CLC5_kGha3rN0luZyVUO7U9frok7Jg"
            />
            <VideosRow
              views="60 Tr lượt xem"
              subs="9.21 Tr người đăng ký"
              description="MuonRoiMaSaoCon #SonTungMTP #MTP #MTPEntertainment #MTPTalent #MRMSC Available"
              timestamp="1 tuần trước"
              channel="Sơn Tùng M-TP Official"
              title="SƠN TÙNG M-TP | MUỘN RỒI MÀ SAO CÒN | OFFICIAL MUSIC VIDEO"
              image="https://i.ytimg.com/an_webp/xypzmu5mMPY/mqdefault_6s.webp?du=3000&sqp=CNzU7oQG&rs=AOn4CLC5_kGha3rN0luZyVUO7U9frok7Jg"
            />
            <VideosRow
              views="60 Tr lượt xem"
              subs="9.21 Tr người đăng ký"
              description="MuonRoiMaSaoCon #SonTungMTP #MTP #MTPEntertainment #MTPTalent #MRMSC Available"
              timestamp="1 tuần trước"
              channel="Sơn Tùng M-TP Official"
              title="SƠN TÙNG M-TP | MUỘN RỒI MÀ SAO CÒN | OFFICIAL MUSIC VIDEO"
              image="https://i.ytimg.com/an_webp/xypzmu5mMPY/mqdefault_6s.webp?du=3000&sqp=CNzU7oQG&rs=AOn4CLC5_kGha3rN0luZyVUO7U9frok7Jg"
            />
            <VideosRow
              views="60 Tr lượt xem"
              subs="9.21 Tr người đăng ký"
              description="MuonRoiMaSaoCon #SonTungMTP #MTP #MTPEntertainment #MTPTalent #MRMSC Available"
              timestamp="1 tuần trước"
              channel="Sơn Tùng M-TP Official"
              title="SƠN TÙNG M-TP | MUỘN RỒI MÀ SAO CÒN | OFFICIAL MUSIC VIDEO"
              image="https://i.ytimg.com/an_webp/xypzmu5mMPY/mqdefault_6s.webp?du=3000&sqp=CNzU7oQG&rs=AOn4CLC5_kGha3rN0luZyVUO7U9frok7Jg"
            />
            <VideosRow
              views="60 Tr lượt xem"
              subs="9.21 Tr người đăng ký"
              description="MuonRoiMaSaoCon #SonTungMTP #MTP #MTPEntertainment #MTPTalent #MRMSC Available"
              timestamp="1 tuần trước"
              channel="Sơn Tùng M-TP Official"
              title="SƠN TÙNG M-TP | MUỘN RỒI MÀ SAO CÒN | OFFICIAL MUSIC VIDEO"
              image="https://i.ytimg.com/an_webp/xypzmu5mMPY/mqdefault_6s.webp?du=3000&sqp=CNzU7oQG&rs=AOn4CLC5_kGha3rN0luZyVUO7U9frok7Jg"
            />
            <VideosRow
              views="60 Tr lượt xem"
              subs="9.21 Tr người đăng ký"
              description="MuonRoiMaSaoCon #SonTungMTP #MTP #MTPEntertainment #MTPTalent #MRMSC Available"
              timestamp="1 tuần trước"
              channel="Sơn Tùng M-TP Official"
              title="SƠN TÙNG M-TP | MUỘN RỒI MÀ SAO CÒN | OFFICIAL MUSIC VIDEO"
              image="https://i.ytimg.com/an_webp/xypzmu5mMPY/mqdefault_6s.webp?du=3000&sqp=CNzU7oQG&rs=AOn4CLC5_kGha3rN0luZyVUO7U9frok7Jg"
            />
            <VideosRow
              views="60 Tr lượt xem"
              subs="9.21 Tr người đăng ký"
              description="MuonRoiMaSaoCon #SonTungMTP #MTP #MTPEntertainment #MTPTalent #MRMSC Available"
              timestamp="1 tuần trước"
              channel="Sơn Tùng M-TP Official"
              title="SƠN TÙNG M-TP | MUỘN RỒI MÀ SAO CÒN | OFFICIAL MUSIC VIDEO"
              image="https://i.ytimg.com/an_webp/xypzmu5mMPY/mqdefault_6s.webp?du=3000&sqp=CNzU7oQG&rs=AOn4CLC5_kGha3rN0luZyVUO7U9frok7Jg"
            />
          </div>
        </>
      )}
    </>
  );
};

export default SearchPage;
