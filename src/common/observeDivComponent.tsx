// observerで画面表示時にクラスを切り替えるDivタグ
import React from 'react';
import { useInView } from 'react-intersection-observer';

interface Props {
  afterClass?: string; //切り替え後のクラス
  beforeClass?: string; //切り替え前のクラス
  className?: string; //クラス名(className)
  once?: boolean; //一回きりか？
  rootMargin?: string; //スクロール時の検知するマージンはば
  children: React.ReactElement; //<div>タグで囲むchildrenのコンポーネント・タグ
}

// Observe機能付きののDivタグ
const ObservingDivComponent = ({
  afterClass,
  beforeClass,
  className,
  once,
  rootMargin,
  children,
}: Props) => {
  const [observerRef, inView] = useInView({
    triggerOnce: once || false,
    rootMargin: rootMargin,
  });

  const startClass = beforeClass || '';
  const animateClass = afterClass || '';

  const additionalClass = inView ? animateClass : startClass;

  const componentsClassName = `${className} ${additionalClass}`;

  const classInsertedComponent = (
    <div className={componentsClassName} ref={observerRef}>
      {children}
    </div>
  );

  return classInsertedComponent;
};

export default ObservingDivComponent;
