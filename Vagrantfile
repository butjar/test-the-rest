# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|

  host_port = ENV['HOST_PORT'] || 8000
  guest_port = ENV['GUEST_PORT'] || 8000

  # Every Vagrant development environment requires a box. You can search for
  # boxes at https://atlas.hashicorp.com/search.
  config.vm.box_url = "https://atlas.hashicorp.com/ubuntu/boxes/precise64"
  config.vm.box = "ubuntu/precise64"
  config.vm.network :forwarded_port, host: host_port, guest: guest_port

  # Create a forwarded port mapping which allows access to a specific port
  # within the machine from a port on the host machine. In the example below,
  # accessing "localhost:8080" will access port 80 on the guest machine.
  # config.vm.network "forwarded_port", guest: 80, host: 8080

  config.vm.provider "virtualbox" do |vb|
    vb.memory = "1024"
  end

  config.vm.provision "shell", inline: <<-SHELL
    apt-get remove --purge node npm
    apt-get update
    curl -sL https://deb.nodesource.com/setup | bash -
    apt-get install -y nodejs
    export PORT=#{guest_port}
  SHELL

  config.vm.provision "chef_solo" do |chef|
    chef.add_recipe 'prepare-environment'
  end

  config.vm.define "nodejs" do |nodejs|
    nodejs.vm.provision "shell", run: "always", path: "vagrant_startup.sh"
  end

end
