import { css } from '@emotion/react';
import { theme } from '@chakra-ui/react';

const prismBaseTheme = css`
  code {
    white-space: pre;
    font-weight: bold;
  }
  code[class*='language-'],
  pre[class*='language-'] {
    color: ${theme.colors.gray[800]};
    background: none;
    font-family: ${theme.fonts.mono};
    font-size: ${theme.fontSizes.lg};
    text-align: left;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: ${theme.lineHeights.normal};
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    hyphens: none;
    width: 100%;
  }
  /* Code blocks */
  pre[class*='language-'] {
    padding-top: ${theme.space[4]};
    padding-bottom: ${theme.space[4]};
    padding-left: ${theme.space[4]};
    padding-right: ${theme.space[4]};
    margin: ${theme.space[6]} 0;
    overflow: auto;
    min-width: 100%;
    font-size: 0.9rem;
    white-space: nowrap;
  }
  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    background: ${theme.colors.gray[50]};
    border: 1px solid ${theme.colors.gray[200]};
    border-radius: ${theme.radii.lg};
  }
  /* Inline code */
  :not(pre) > code[class*='language-'] {
    padding: 0.1em;
    border-radius: 0.3em;
    white-space: normal;
  }
  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: slategray;
  }
  .token.punctuation {
    font-weight: bold;
    color: #999;
  }
  .token.namespace {
    opacity: 0.7;
  }
  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.deleted {
    font-weight: bold;
  }
  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #690;
  }
  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    font-weight: bold;
    color: #9a6e3a;
  }
  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: #07a;
  }
  .token.function,
  .token.class-name {
    color: #dd4a68;
  }
  .token.regex,
  .token.important,
  .token.variable {
    color: #e90;
  }
  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }
  .token.entity {
    cursor: help;
  }
  .mdx-marker {
    display: block;
    margin-left: -${theme.space[4]};
    margin-right: -${theme.space[4]};
    padding-left: ${theme.space[4]};
    padding-right: ${theme.space[4]};
    background-color: ${theme.colors.gray[200]};
    box-shadow: inset 3px 0px 0 0px ${theme.colors.blue[600]};
    min-width: fit-content;
  }
  .remark-code-title {
    padding: ${theme.space[2]} ${theme.space[4]};
    font-family: ${theme.fonts.mono};
    background: ${theme.colors.gray[200]};
    color: ${theme.colors.gray[800]};
    border: 1px solid ${theme.colors.gray[200]};
    border-top-left-radius: ${theme.radii.lg};
    border-top-right-radius: ${theme.radii.lg};
    font-size: 0.8rem;
    font-weight: 600;
    margin-bottom: 0;
    width: 100%;
    + pre {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      margin-top: 0;
    }
  }
`;

export const prismLightTheme = css`
  ${prismBaseTheme};
  code[class*='language-'],
  pre[class*='language-'] {
    color: white;
  }
  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    background: #101010;
    border: 1px solid ${theme.colors.gray[200]};
  }
  :not(pre) > code[class*='language-bash'],
  pre[class*='language-bash'] {
    background: ${theme.colors.black};
    border: 1px solid ${theme.colors.black};
  }
  code[class*='language-bash'],
  pre[class*='language-bash'] {
    color: #fff;
  }
  .mdx-marker {
    background-color: hsla(204, 45%, 96%, 1);
  }
`;
