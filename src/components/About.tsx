import { useRouter } from './core/Router';

export default function About() {
  const { push } = useRouter();
  return (
    <div>
      <p>나? 어바웃</p>
      <button
        onClick={() => {
          push('/');
        }}
      >
        go main
      </button>
    </div>
  );
}
