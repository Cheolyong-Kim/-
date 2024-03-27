import { useRecoilState } from "recoil";
import * as H from "./LayoutHeader.styles";
import { accessTokenState } from "../../../../commons/stores";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import { useQueryFetchUserLoggedIn } from "../../../../commons/hooks/useQuery";
import { useState } from "react";

const NAVIGATION_MENUS = [
  { name: "자유게시판", page: "/boards" },
  { name: "중고마켓", page: "/markets" },
  { name: "공지사항", page: "/notice" },
];

const LayoutHeader = (): JSX.Element => {
  const [selectedMenu, setSelectedMenu] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const { data } = useQueryFetchUserLoggedIn();
  const { onClickMoveToPage } = useMoveToPage();

  const onClickLogout = (): void => {
    setAccessToken("");
    localStorage.removeItem("accessToken");
    setIsClicked(false);
  };

  return (
    <H.Header>
      <H.ContentsWrap>
        <H.NavWrap>
          <H.Logo onClick={onClickMoveToPage("/markets")}>
            <H.LogoImg src="/header/logo.png" />
          </H.Logo>
          <H.Nav>
            <H.NavUl>
              {NAVIGATION_MENUS.map((menu) => (
                <H.NavLi key={menu.page}>
                  <H.NavLink
                    onClick={() => {
                      onClickMoveToPage(menu.page)();
                      setSelectedMenu(menu.name);
                    }}
                    style={{
                      color: selectedMenu === menu.name ? "#fe7488" : "#404040",
                      fontWeight: selectedMenu === menu.name ? "bold" : "400",
                    }}
                  >
                    {menu.name}
                  </H.NavLink>
                </H.NavLi>
              ))}
            </H.NavUl>
          </H.Nav>
        </H.NavWrap>
        {accessToken ? (
          <>
            <H.HeaderProfileWrap>
              <H.HeaderProfileImg
                src="/boards/id/profile.png"
                onClick={() => {
                  setIsClicked((prev) => !prev);
                }}
              />
              <H.HeaderProfileNavWrap isClicked={isClicked}>
                <H.HeaderProfileInfoWrap>
                  <H.HeaderProfileImg
                    src={
                      data?.fetchUserLoggedIn.picture ??
                      "/boards/id/profile.png"
                    }
                  />
                  <H.HeaderProfileNickNameWrap>
                    <H.HeaderProfileNickName>
                      {data?.fetchUserLoggedIn.name}
                    </H.HeaderProfileNickName>
                    <H.HeaderProfilePoint>
                      {data?.fetchUserLoggedIn.userPoint?.amount}P
                    </H.HeaderProfilePoint>
                  </H.HeaderProfileNickNameWrap>
                </H.HeaderProfileInfoWrap>
                <H.HeaderProfileUl>
                  <H.HeaderProfileLi onClick={onClickMoveToPage("/mypage")}>
                    마이페이지
                  </H.HeaderProfileLi>
                  <H.HeaderProfileLi onClick={onClickLogout}>
                    로그아웃
                  </H.HeaderProfileLi>
                </H.HeaderProfileUl>
              </H.HeaderProfileNavWrap>
            </H.HeaderProfileWrap>
          </>
        ) : (
          <>
            <H.HeaderButtonWrap>
              <H.HeaderButton onClick={onClickMoveToPage("/login")}>
                로그인
              </H.HeaderButton>
            </H.HeaderButtonWrap>
          </>
        )}
      </H.ContentsWrap>
    </H.Header>
  );
};

export default LayoutHeader;
