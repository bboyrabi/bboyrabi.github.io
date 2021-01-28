# レスポンシブデザイン

[レスポンシブレイアウトについて](https://rabico.dev/about-responsive-design/)

## Flexboxを使用して大きい画面に対応する
現在のレイアウトは横幅`750px`で丁度のレイアウトになります。  
Flexboxを使用して横幅`750px`よりも大きい画面に対応させてみてください。  
  
ヒント（どちらかの方法）: 
- `div#mainContainer`を中央寄せにする
- `main`要素をストレッチさせる
  
## メディアクエリを使用して小さい画面に対応する
現在のレイアウトではモバイルなどの小さい画面に表示するとレイアウトがはみ出してしまいます。  
メディアクエリを使用してモバイル用のCSSを定義してください。  

ヒント:
- `768px`未満をモバイルの画面幅とします。
- モバイル画面では`nav`要素は非表示にします。
- モバイル画面では`main`要素の`min-width`を`unset`にします。
- モバイル画面では`div#mainContainer`の`padding`を`16px`にします。

## （こたえ）Flexboxを使用して大きい画面に対応する

### `div#mainContainer`を中央寄せにする
```
#mainContainer {
    min-height: calc(100vh - 60px);
    padding: 24px;
    justify-content: center; /* 横中央寄せを追加 */
}
```

### `main`要素をストレッチさせる
```
main {
    min-width: 500px;
    background-color: #fafafa; /* ストレッチを追加 */
    flex: 1;
}
```

### 両方を使用した応用
```
#mainContainer {
    min-height: calc(100vh - 60px);
    padding: 24px;
    justify-content: center; /* 横中央寄せを追加 */
    max-width: 1280px; /* メインコンテナの最大横幅 */
    margin: auto; /* 余白を左右に割って中央寄せ */
}
```
```
main {
    min-width: 500px;
    background-color: #fafafa; /* ストレッチを追加 */
    flex: 1;
}
```

## （こたえ）メディアクエリを使用して小さい画面に対応する

この回答では`max-width`をメディアクエリで使用していますが、これはデスクトップ画面用のレイアウトを先に作成したからです。  
モバイルファーストは先にモバイル用の画面を作成するため、その場合は`min-width`が使用されます。

```
@media (max-width: 767px) { 
    nav {
        display: none;
    }

    main {
        min-width: unset;
        width: 100%;
    }

    #mainContainer {
        padding: 16px;
    }
}
```