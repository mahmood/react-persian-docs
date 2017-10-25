/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 */

'use strict';

import Container from 'components/Container';
import ExternalFooterLink from './ExternalFooterLink';
import FooterLink from './FooterLink';
import FooterNav from './FooterNav';
import MetaTitle from 'templates/components/MetaTitle';
import React from 'react';
import {colors, media} from 'theme';

import ossLogoPng from 'images/oss_logo.png';

const Footer = ({layoutHasSidebar = false}) => (
  <footer
    css={{
      backgroundColor: colors.darker,
      color: colors.white,
      paddingTop: 10,
      paddingBottom: 50,

      [media.size('sidebarFixed')]: {
        paddingTop: 40,
      },
    }}>
    <Container>
      <div
        css={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',

          [media.between('small', 'medium')]: {
            paddingRight: layoutHasSidebar ? 240 : null,
          },

          [media.between('large', 'largerSidebar')]: {
            paddingRight: layoutHasSidebar ? 280 : null,
          },
          [media.between('largerSidebar', 'sidebarFixed', true)]: {
            paddingRight: layoutHasSidebar ? 380 : null,
          },
        }}>
        <div
          css={{
            flexWrap: 'wrap',
            display: 'flex',

            [media.lessThan('large')]: {
              width: '100%',
            },
            [media.greaterThan('xlarge')]: {
              width: 'calc(100% / 3 * 2)',
              paddingLeft: 40,
            },
          }}>
          <FooterNav layoutHasSidebar={layoutHasSidebar}>
            <MetaTitle onDark={true}>مستندات</MetaTitle>
            <FooterLink to="/docs/hello-world.html">شروع سریع</FooterLink>
            <FooterLink to="/docs/thinking-in-react.html">
              فکرکردن به سبک ری‌اکت
            </FooterLink>
            <FooterLink to="/tutorial/tutorial.html">آموزش</FooterLink>
            <FooterLink to="/docs/jsx-in-depth.html">
              راهنما پیشرفته
            </FooterLink>
          </FooterNav>
          <FooterNav layoutHasSidebar={layoutHasSidebar}>
            <MetaTitle onDark={true}>جامعه کاربری</MetaTitle>
            <ExternalFooterLink
              href="http://stackoverflow.com/questions/tagged/reactjs"
              target="_blank"
              rel="noopener">
              Stack Overflow
            </ExternalFooterLink>
            <ExternalFooterLink
              href="https://discuss.reactjs.org"
              target="_blank"
              rel="noopener">
              فروم
            </ExternalFooterLink>
            <ExternalFooterLink
              href="https://discord.gg/0ZcbPKXt5bZjGY5n"
              target="_blank"
              rel="noopener">
              Reactiflux Chat
            </ExternalFooterLink>
            <ExternalFooterLink
              href="https://www.facebook.com/react"
              target="_blank"
              rel="noopener">
              فیسبوک
            </ExternalFooterLink>
            <ExternalFooterLink
              href="https://twitter.com/reactjs"
              target="_blank"
              rel="noopener">
              توییتر
            </ExternalFooterLink>
          </FooterNav>
          <FooterNav layoutHasSidebar={layoutHasSidebar}>
            <MetaTitle onDark={true}>منابع</MetaTitle>
            <FooterLink to="/community/conferences.html">
              کنفرانس ها
            </FooterLink>
            <FooterLink to="/community/videos.html">ویدیوها</FooterLink>
            <ExternalFooterLink
              href="https://github.com/facebook/react/wiki/Examples"
              target="_blank"
              rel="noopener">
              مثال ها
            </ExternalFooterLink>
            <ExternalFooterLink
              href="https://github.com/facebook/react/wiki/Complementary-Tools"
              target="_blank"
              rel="noopener">
              ابزار های مکمل
            </ExternalFooterLink>
          </FooterNav>
          <FooterNav layoutHasSidebar={layoutHasSidebar}>
            <MetaTitle onDark={true}>بیشتر</MetaTitle>
            <FooterLink to="/blog/">وبلاگ</FooterLink>
            <ExternalFooterLink
              href="https://github.com/facebook/react"
              target="_blank"
              rel="noopener">
              گیت هاب
            </ExternalFooterLink>
            <ExternalFooterLink
              href="http://facebook.github.io/react-native/"
              target="_blank"
              rel="noopener">
              ری‌اکت نیتو
            </ExternalFooterLink>
            <FooterLink to="/acknowledgements.html">
              سپاس گذاری ها
            </FooterLink>
          </FooterNav>
        </div>
        <section
          css={{
            paddingTop: 40,
            display: 'block !important', // Override 'Installation' <style> specifics

            [media.greaterThan('xlarge')]: {
              width: 'calc(100% / 3)',
              order: -1,
            },
            [media.greaterThan('large')]: {
              order: -1,
              width: layoutHasSidebar ? null : 'calc(100% / 3)',
            },
            [media.lessThan('large')]: {
              textAlign: 'center',
              width: '100%',
              paddingTop: 40,
            },
          }}>
          <a
            href="https://code.facebook.com/projects/"
            target="_blank"
            rel="noopener">
            <img
              alt="Facebook Open Source"
              css={{
                maxWidth: 160,
                height: 'auto',
              }}
              src={ossLogoPng}
            />
          </a>
          <p
            css={{
              color: colors.subtleOnDark,
              paddingTop: 15,
            }}>
            Copyright © 2017 Facebook Inc.
          </p>
        </section>
      </div>
    </Container>
  </footer>
);

export default Footer;
