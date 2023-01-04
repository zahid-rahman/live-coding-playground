const dependencies = [
    {
      name: 'A',
      version: '1.0',
      isDeletable: false
    },
    {
      name: 'B',
      version: '2.0',
      isDeletable: true
    }
  ]

  const packages = {}

  const data = dependencies.map((dep) => {
    const name = dep.name
        packages[name] = dep.version
  })

  console.log(packages)