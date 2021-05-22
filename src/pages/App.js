import React from 'react'
import {
  MainContainer,
  AvatarTitleContainer,
  Avatar,
  Title,
  MenuAboutMeContainer,
  SideMenu,
  AboutMe
} from './styled'
const App = () => (
  <MainContainer>
    <AvatarTitleContainer>
      <Avatar>Avatar</Avatar>
      <Title>Title</Title>
    </AvatarTitleContainer>
    <MenuAboutMeContainer>
      <SideMenu>Menu</SideMenu>
      <AboutMe>About me</AboutMe>
    </MenuAboutMeContainer>
  </MainContainer>
)

export default App
