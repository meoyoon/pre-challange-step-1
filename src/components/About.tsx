import { useRouter } from './core/Router';

export default function About() {
  const { push } = useRouter();
  return (
    <div
      onClick={() => {
        push('/');
      }}
    >
      나? 어바웃
    </div>
  );
}
