import { useRouter } from './core/Router';

export default function Root() {
  const { push } = useRouter();
  return (
    <div
      onClick={() => {
        push('/about');
      }}
    >
      나? 루트
    </div>
  );
}
