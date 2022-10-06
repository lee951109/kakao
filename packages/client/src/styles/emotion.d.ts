import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme extends Record<string, any> {
    colors: {
      primary: string;
      gray: {
        [key: number]: string;
      };
      white: string;
    }
  }
}


/* Module? import or export 가 있는 파일은 Module로 취급한다.
  외부에서는 직접적으로 모듈을 불러오지 않는 이상 그 모듈의 데이터를 사용할 수 없다.
  
  declare?
  변수, 상수, 함수, 또는 클래스가 어딘가에 이미 선언되어 있음을 알림.
  js코드로는 컴파일 되지 않고, ts 컴파일러에게 타입 정보를 알리기만 함.
  타입의 경우 어차피 JS 코드로 컴파일 되지 않으므로 declare 키워드를 사용하지 않아도 된다.

  .d.ts 파일 (선언 코드만 담긴 파일)
  구현부가 아닌 선언부만을 작성하는 용도의 파일을 의미.
  js코드로 컴파일 되지 않는다.
  skipLibCheck 프로퍼티가 false라면 다음 규칙들을 강제한다. (true여도 지키는 것이 좋음)
  선언 코드만 작성이 가능하고, 일반 코드는 작성할 수 없다.
  따라서 최상위에 존재하는 변수, 상수, 함수, 클래스, 네임스페이스의 선언 앞에는 반드시 declare 혹은 export가 붙어야 한다.
  이 파일에 작성되는 declare namespace 블록과 declare module 블록의 필드들에는 export 키워드가 기본으로 붙는다. 즉 굳이 또 붙여줄 필요가 없다.
  }
 */ 
