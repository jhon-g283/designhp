import React from 'react';
import { PropsWithChildren, forwardRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface Props {
  afterClass?: string;
  beforeClass?: string;
  once: boolean;
  rootMargin: string;
  children: React.ReactElement;
}

interface ResultProps {
  startClass: string;
  animateClass: string;

  inView: boolean;
}

const InViewWrapper = ({
  afterClass,
  beforeClass,
  once,
  rootMargin,
  children,
}: Props) => {
  const [observerRef, inView] = useInView({
    triggerOnce: once,
    rootMargin: rootMargin,
  });

  const startClass = beforeClass || '';
  const animateClass = afterClass || '';

  const classInsertedComponent = (
    <WrapWithRefComponent
      startClass={startClass}
      animateClass={animateClass}
      inView={inView}
      ref={observerRef}
    >
      {children}
    </WrapWithRefComponent>
  );

  return classInsertedComponent;
};

// refを関数コンポーネントに渡すためforwardRefで関数化して使用する
const WrapWithRefComponent = forwardRef<
  HTMLSpanElement,
  PropsWithChildren<ResultProps>
>((props, ref) => {
  console.log(props.children);

  console.log(props.inView);

  const flag = props.inView;
  const startClass = props.startClass;
  const animateClass = props.animateClass;

  const animateClassName = flag ? animateClass : startClass;

  // const animateClassName = props.inView ? 'testA' : 'testB';
  // 表示しらたらクラスを切り替える
  const animationComponent = (
    <span ref={ref} className={animateClassName}>
      {props.children}
    </span>
  );

  return animationComponent;
});

WrapWithRefComponent.displayName = 'Result'; //デバッグ用

export default InViewWrapper;
