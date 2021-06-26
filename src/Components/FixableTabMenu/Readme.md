# 스크롤에 따라 Fix 되는 탭 메뉴 최초 버전
![](https://i.imgur.com/0XMDUvS.gif)

### (step1) import 
```javascript
import FixableTabMenu from '../../Components/FixableTabMenu/FixableTabMenu';
```

### (step2) useState
```javascript
const [tabIndex, setTabIndex] = useState(0);
```

### (step3) Tab Component 배열
탭 변경 시 보여 줄 컴포넌트를 배열로 선언해 둡니다. 
```javascript
```

### (step4) JSX
```javascript
<FixableTabMenu
  tabList={['상세정보', '후기']
  tabIndex={tabIndex}
  setTabIndex={setTabIndex}

{tabIndex === 0 && <ProductDescription product={product} />}
{tabIndex === 1 && <ProductReview product={product} />}
/>
```