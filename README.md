## Router
- 하위 Route들에게 Path 정보를 공유해서 사용하기 위하여 contextApi를 활용
- 404 처리를 위해 처음 init했을 경우를 고려하여, 모든 Route List에서 마운트된 이후, path를 설정 및 `pathList`에 현재 path가 있는지 확인

## Route
- `Route`는 `Router`의 하위 요소로 props로 받은 path와 일치하면 props로 받은 컴포넌트를 보여줌
- 그러기 위해 props로 받은 path를 contextApi에 등록하여 404를 구별할 수 있도록함

### 사진

- root

<img width="427" alt="image" src="https://user-images.githubusercontent.com/106960496/194410272-d4e0e48e-05af-44d3-bdd2-19337f3e5ade.png">

- about

<img width="427" alt="image" src="https://user-images.githubusercontent.com/106960496/194410319-a7dc94ce-a405-4e5b-9057-93f211e22e39.png">

- 404

<img width="427" alt="image" src="https://user-images.githubusercontent.com/106960496/194410367-c17b07ba-0cd8-4c2d-b455-b77f36db6b30.png">

