export default () => (
  {
    isLoading: true,
    entries: [
      {
        id: new Date().getTime(),
        date: new Date().toDateString(),
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo fugiat quasi voluptas delectus non exercitationem consectetur tenetur doloremque a quisquam ea praesentium, eligendi molestias unde beatae sequi quibusdam quam earum.',
        picture: null // https://...
      },
      {
        id: new Date().getTime() + 100,
        date: new Date().toDateString(),
        text: 'this is my sercond entry. Illo fugiat quasi voluptas delectus non exercitationem consectetur tenetur doloremque a quisquam ea praesentium, eligendi molestias unde beatae sequi quibusdam quam earum',
        picture: null // https://...
      },
      {
        id: new Date().getTime() + 200,
        date: new Date().toDateString(),
        text: 'this is my third entry. Quisquam ea praesentium, eligendi molestias unde beatae sequi quibusdam quam earum, illo fugiat quasi voluptas delectus non exercitationem consectetur tenetur doloremque',
        picture: null // https://...
      }
    ]
  }
)
