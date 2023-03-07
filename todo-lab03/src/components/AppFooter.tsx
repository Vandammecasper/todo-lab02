import '../assets/styles/components/footer.scss'

export default () => {
  return (
    <footer className='text-sm text-neutral-3OO text-neutral-400'>
      <p>Crafted with love by MCT - {new Date().getFullYear()}</p>
    </footer>
  );
};
