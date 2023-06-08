interface Config {
    express: { blah: string }
}

function Configuration(configuration: Partial<Config> = {}): Function {
    return () => {
        configuration
    };
}

@Configuration({
    express: { blah: 'test' }
})
export class MainService {
}


function bootstrap(module: any) {
    console.log(module.name)
}

bootstrap(MainService)
