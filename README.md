# React Calculator

"React"를 사용한 계산기 만들어보기.

## Condition

- 괄호
  - 괄호가 쌍으로 존재할때만 수식에 포함한다.
- 숫자표현
  - 세자릿수 마다 콤마(,)를 출력한다.

## Domain

- ScanInput
  - value 입력
  - 입력에 대한 예외처리
- PrintDisplay
  - 입력된 계산값을 표현
- CalculatorButtons
  - 숫자버튼 [0 ~ 9]
  - 계산버튼 ['%', '÷', 'x', '-', '+']
  - 그 외 ['C', '()', '.', 'backspace', '=']

## Function

- "C" : 초기화 함수
- "=" : 결과값 계산 함수

## Development

- "utils"에서 계산 및 정규식을 모두 처리함
  - "input"에 대한 유효성 검사
  - "input"에 입력된 값의 계산
- 공유되어야하는 value
  - scanInput value
- 데이터 전달
  - 현재 구조는 1 Depth
  - "Props"로 진행

## Condition

- 빈칸에 소수점(.) 입력하면 0이 붙어야함
- 괄호를 제외한 모든 연산자는 연속하여 사용 불가
- 괄호는 열림과 쌍이 맞아야함