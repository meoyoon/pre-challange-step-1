import { useRouter } from './core/Router';

export default function Root() {
  const { push } = useRouter();
  return (
    <div>
      <p>나? 루트</p>
      <button
        onClick={() => {
          push('/about');
        }}
      >
        About
      </button>
    </div>
  );
}
