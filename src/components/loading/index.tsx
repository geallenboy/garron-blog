import React from 'react';

export class LoadingPage extends React.Component<
  React.PropsWithChildren<{
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
    data: React.ReactNode;
  }>
> {
  render() {
    const { isLoading, isSuccess, isError, data } = this.props;
    let showDom: React.ReactNode = null;
    if (isLoading) {
      showDom = <div>数据加载...</div>;
    } else {
      if (isSuccess) {
        showDom = data;
      } else if (isError) {
        showDom = <div>数据失败</div>;
      } else {
        showDom = <div>数据请求中</div>;
      }
    }
    return <div>{showDom}</div>;
  }
}
