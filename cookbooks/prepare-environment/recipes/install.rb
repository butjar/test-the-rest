
mysql_service 'default' do
  initial_root_password ''
  action [:create, :start]
end
